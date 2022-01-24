/**
 * Coerce anything into an array
 * @param {*} any
 */
function arrify(any) {
  return any ? (Array.isArray(any) ? any : [any]) : [];
}

/**
 * Promisify an element's onload callback
 * @param {node} node
 */
function onload(node) {
  return new Promise((resolve, reject) => {
    node.onload = resolve;
    node.onerror = (err) =>
      reject(err.path ? err.path[0] : err.composedPath()[0]);
  });
}

/**
 * Loads scripts (dependencies) given a list of script urls.
 * @param {*} urls
 */
function loadScript(script) {
  const [url, ...attrs] = arrify(script);
  const el = document.createElement("script");
  el.src = url;
  el.async = false;
  attrs.forEach((attr) => el.setAttribute(attr, ""));
  document.head.appendChild(el);
  return el;
}

function getTagLevel(name) {
  if (name[0].toLowerCase() != "h") {
    return 0;
  }
  const i = parseInt(name.substr(1));
  if (isNaN(i)) {
    throw "invalid tag name " + name;
  }
  return i;
}

function createTableOfContents(container) {
  let container_element = $(container);
  let tag_level = 0;
  $("h1, h2, h3, h4, h5, h6").each((index, header) => {
    const current_tag_level = getTagLevel($(header).prop("tagName"));

    // if this is a sub-heading
    if (current_tag_level > tag_level) {
      const new_container = $("<ul></ul>");
      container_element.append(new_container);
      container_element = new_container;
    }
    // if this is a heading on a parent level, go up to the container's parent.
    else if (current_tag_level < tag_level) {
      container_element = container_element.parent();
    }
    tag_level = current_tag_level;

    const list_entry = $("<li></li>");
    container_element.append(list_entry);

    // set up IDs for header and corresponding TOC element
    const entry_id =
      $(header).attr("id") || $(header).prop("tagName") + "_" + index;
    $(header).attr("id", entry_id);
    list_entry.attr("id", "toc_" + entry_id);

    // create link
    const entry_link = $("<a></a>").attr("href", "#" + entry_id);
    list_entry.append(entry_link);

    // set TOC entry content
    entry_link.text($(header).text());
  });
}

function updateTableOfContentsHighlight() {
  const scroll = $(document).scrollTop();
  let highlight_id = null;
  $("h1, h2, h3, h4, h5, h6").each((index, header) => {
    const current_element = header;
    const toc_id = "#toc_" + $(current_element).attr("id");
    const elem_ypos = $(current_element).offset().top;
    if (elem_ypos < scroll + 10) {
      highlight_id = toc_id;
    }
    if ($(toc_id).length > 0) {
      $(toc_id).removeClass("active");
    }
  });
  // only highlight *last* element that is above the window's scroll position.
  if ($(highlight_id).length > 0) {
    $(highlight_id).addClass("active");
  }
}

async function markdown2html(path, options) {
  // process options
  const defaultOptions = {
    contentContainer: "main",
    includeToc: true,
    includeCss: true,
    onDomReady: () => {},
  };
  const { contentContainer, includeToc, includeCss, onDomReady } = {
    ...defaultOptions,
    ...options,
  };

  // hide content container until rendering is finished
  document.querySelector(contentContainer).style.visibility = "hidden";

  // urls of stylesheets to load
  const cssUrls = [
    "https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@4/github-markdown.min.css",
    "https://cdn.jsdelivr.net/gh/PrismJS/prism@1/themes/prism.min.css",
  ];

  // load the CSS
  if (includeCss) {
    cssUrls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = url;
      document.getElementsByTagName("head")[0].appendChild(link);
    });
  }

  // urls of scripts to load
  const markedUrl =
    "https://cdn.jsdelivr.net/gh/markedjs/marked@1/marked.min.js";
  const prismUrl = [
    "https://cdn.jsdelivr.net/gh/PrismJS/prism@1/prism.min.js",
    "data-manual",
  ];
  const autoloaderUrl =
    "https://cdn.jsdelivr.net/gh/PrismJS/prism@1/plugins/autoloader/prism-autoloader.min.js";
  const mathjaxUrl =
    "https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js";
  const jqueryUrl = "https://code.jquery.com/jquery-3.5.1.slim.min.js";

  const scriptUrls = [
    markedUrl,
    prismUrl,
    autoloaderUrl,
    mathjaxUrl,
    jqueryUrl,
  ];
  const scriptElements = scriptUrls.map((script) => loadScript(script));

  let loadedCt = 0;
  for (const element of scriptElements) {
    element.addEventListener("load", async () => {
      loadedCt += 1;
      if (loadedCt === scriptElements.length) {
        // generate and insert the html from markdown
        const md = await fetch(path).then((file) => file.text());
        const container = document.querySelector(contentContainer);
        if (includeCss) {
          container.classList.add("markdown-body");
        }
        container.innerHTML += window.marked(md);

        // call callback function in case anything is waiting on the DOM to be ready
        await onDomReady();

        // handle code block syntax highlighting
        window.Prism.highlightAllUnder(container);

        // handle LaTeX
        await window.MathJax.typesetPromise();

        const termIDToDefinitions = await createGlossaryMap();
        try {
          // if url has hash, jump to section after everything is loaded
          const hash = document.location.hash;
          if (hash) {
            window.location =
              window.location.origin + window.location.pathname + hash;
          }

          document.querySelectorAll("a").forEach((glossaryLink) => {
            const link = glossaryLink.href;
            // get id of link
            const term = link.substring(link.lastIndexOf("#") + 1);
            // get definition
            const definition = termIDToDefinitions[term];

            if (definition) {
              glossaryLink.classList.add("tooltip");

              const tooltipText = document.createElement("span");
              tooltipText.classList.add("tooltiptext");
              tooltipText.innerHTML = window.marked(definition);
              glossaryLink.appendChild(tooltipText);

              // const emSize = parseFloat(
              //     getComputedStyle(tooltipText).fontSize
              // );
              // if (tooltipText.offsetHeight > 9 * emSize) {
              //     const fade = document.createElement('div');
              //     fade.classList.add('fade');
              //     tooltipText.appendChild(fade);

              //     const whiteBlock = document.createElement('div');
              //     whiteBlock.classList.add('white-block');
              //     tooltipText.appendChild(whiteBlock);
              // }
            }
          });
        } catch (e) {
          console.warn(e);
        }

        // create table of contents
        if (includeToc) {
          const tocContainer = document.createElement("aside");
          tocContainer.id = "table-of-contents";
          tocContainer.setAttribute("role", "navigation");
          tocContainer.title = "Table of Contents";
          container.appendChild(tocContainer);
          createTableOfContents(tocContainer);

          // update highlighted section in table of contents when user scrolls
          $(window).scroll(updateTableOfContentsHighlight);
        }

        // set content container to be visible again
        document.querySelector(contentContainer).style.visibility = "visible";
      }
    });
  }
}

// From https://github.com/markedjs/marked/blob/master/src/Slugger.js
function slug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/<[!\/a-z].*?>/gi, "")
    .replace(
      /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
      ""
    )
    .replace(/\s/g, "-");
}

async function createGlossaryMap() {
  const glossaryPath =
    location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? "/glossary/COURSE_CONTENT.md"
      : "/webpage/glossary/COURSE_CONTENT.md";
  let glossaryMdString = await fetch(glossaryPath).then((file) => file.text());

  const termIDToDefinitions = {};

  let i = (j = 0);
  let currWord = "";
  while ((j = glossaryMdString.indexOf("\n", i)) !== -1) {
    const line = glossaryMdString.substring(i, j).trim();
    if (line.startsWith("---")) {
      currWord = "";
    } else if (line.startsWith("###")) {
      currWord = slug(line.substring(4));
      termIDToDefinitions[currWord] = "";
    } else if (currWord.length > 0) {
      if (line.startsWith("##")) {
        currWord = "";
      } else {
        termIDToDefinitions[currWord] += line + "\n";
      }
    }
    i = j + 1;
  }
  const line = glossaryMdString.substring(i);
  if (currWord.length > 0) {
    if (!(line.startsWith("##") || line.startsWith("---"))) {
      termIDToDefinitions[currWord] += line + "\n";
    }
  }

  return termIDToDefinitions;
}
