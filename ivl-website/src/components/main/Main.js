import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Collapsible from "react-collapsible";
import Box from "@mui/material/Box";

import Headshot from "../../images/portraits/srinath.jpg";
import HomePage from "../../md/main/HomePage.md";
import "./Main.css";

const Main = () => {
  const [contentMap, setContentMap] = useState({});

  useEffect(() => {
    // Fetch text from markdown file
    fetch(HomePage)
      .then((res) => res.text())
      .then((text) => setContentMap(parseContent(text)));
  }, []);

  // Markdown text parsing logic
  const parseContent = (content) => {
    // split content based on newline and assign to array
    var arr = content.split("\n\n");

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

    console.log("convertToMap: ", contentMap);

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

  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          pt: 1,
          mt: 1,
          height: "auto",
          bgcolor: "#F7F6F2",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>
              <Box sx={{ ml: 2 }}>
                <ReactMarkdown
                  children={contentMap["Name"]}
                  linkTarget="_blank"
                  className="format-name"
                />
              </Box>
              {/* <EmailIcon sx={{ ml: 2 }} className="inline-icon"></EmailIcon> */}
              <Box sx={{ ml: 2, display: "flex", mt: -1 }}>
                <EmailRoundedIcon className="inline-icon"></EmailRoundedIcon>
                <ReactMarkdown
                  children={contentMap["Email"]}
                  linkTarget="_blank"
                  className="inline-email"
                />
              </Box>
              <Typography variant="subtitle2" sx={{ ml: 2, mt: 0 }}>
                <ReactMarkdown
                  children={contentMap["Address"]}
                  linkTarget="_blank"
                  className="align-address"
                />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            {/* <div className="fill">
              <img className="logo" src={Headshot} alt="Brown Logo" />
            </div> */}
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          height: "auto",
          bgcolor: "#F7F6F2",
          pd: 1,
          mt: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="fill">
              <img
                className="headshot"
                src={Headshot}
                alt="Srinath Profile Pic"
              />
            </div>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ ml: 0.5, mr: 0.5, mt: -1 }}>
              <ReactMarkdown
                children={contentMap["About"]}
                linkTarget="_blank"
              />
            </Box>
            <Paper
              elevation={3}
              sx={{
                height: "auto",
                bgcolor: "#605770",
                mr: 1,
                mt: 0.5,
              }}
            >
              <Box sx={{ ml: 0.5, color: "#ffffff", mr: 0.5 }}>
                <ReactMarkdown
                  children={contentMap["Prospective Students"]}
                  linkTarget="_blank"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ ml: 1.5, mr: 0.5, mt: -2 }}>
              <ReactMarkdown
                children={contentMap["Other Work"]}
                linkTarget="_blank"
              />
            </Box>
            <Box textAlign={"center"} sx={{ mt: 1 }}>
              <ReactMarkdown
                children={contentMap["Links"]}
                linkTarget="_blank"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          height: "auto",
          bgcolor: "#F7F6F2",
          pd: 1,
          mt: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ ml: 1.5, mr: 0.5 }}>Updates</Box>
            <Box sx={{ ml: 1.5, mr: 0.5 }}>
              <ReactMarkdown
                children={contentMap["Updates"]}
                linkTarget="_blank"
              />
              <Collapsible
                trigger="Show More"
                className="collapsible-div"
                triggerWhenOpen="Show Less"
                onOpen={() => {
                  window.scroll({
                    top: document.body.offsetHeight,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <ReactMarkdown
                  children={contentMap["Collapsible Updates"]}
                  linkTarget="_blank"
                />
              </Collapsible>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Main;
