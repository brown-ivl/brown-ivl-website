// Markdown text parsing logic
const parseContent = (content) => {
  // split content based on newline + empty line and assign to array

  // macintosh has CR line endings, so we try for it first
  var arr = content.split("\n\n");

  // windows has CR LF line endings, so we need to remove them
  if (arr.length === 1) {
    arr = content.split("\r\n\r\n");
  }

  // UNIX has LF line endings, so we need to remove them
  if (arr.length === 1) {
    arr = content.split("\n");
  }

  // splice the first element of the array (the comment at the start of md file)
  arr = arr.splice(1, arr.length - 1);

  // in the array, if the item is empty, splice it out
  arr.forEach(function (item, index, object) {
    if (item === "") {
      object.splice(index, 1);
    }
  });

  /* 
      we have to forEach once again as if you write this logic in the above 
      forEach, splicing dynamically changes the length of the array and the 
      logic fails.
      Here we check if the object is a heading (ie. starts with #) then we
      remove the # so it can be used as a key later on.
    */
  arr.forEach(function (item, index, object) {
    if (object[index][0] === "#" && object[index][1] === " ") {
      object[index] = object[index].replace("#", "").trim();
    }
  });

  // create an dict with the key as the heading and the value as the content
  const contentMap = convertArrayToMap(arr);

  // console.log("convertToMap: ", contentMap);

  return contentMap;
};

const convertArrayToMap = (arr) => {
  let r = {};

  for (let i = 0; i < arr.length; i += 2) {
    let key = arr[i],
      value = arr[i + 1];
    r[key] = value;
  }

  return r;
};

export default parseContent;
