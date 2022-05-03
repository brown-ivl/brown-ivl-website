import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import Logo from "../../images/placeholders/stocklogo.jpeg";
import Headshot from "../../images/placeholders/plHeadshot.png";
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
    // console.log(content);
    var arr = content.split("\n");

    arr = arr.splice(1, arr.length - 1);

    arr.forEach(function (item, index, object) {
      if (item === "") {
        object.splice(index, 1);
      }
    });

    arr.forEach(function (item, index, object) {
      if (object[index][0] === "#" && object[index][1] === " ") {
        object[index] = object[index].replace("#", "").trim();
      }
    });

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
              <Typography sx={{ ml: 2 }}>
                <ReactMarkdown
                  children={contentMap["Name"]}
                  linkTarget="_blank"
                  className="format-name"
                />
              </Typography>
              {/* <EmailIcon sx={{ ml: 2 }} className="inline-icon"></EmailIcon> */}
              <Typography sx={{ ml: 2, display: "flex", mt: -1 }}>
                <EmailRoundedIcon className="inline-icon"></EmailRoundedIcon>
                <ReactMarkdown
                  children={contentMap["Email"]}
                  linkTarget="_blank"
                  className="inline-email"
                />
              </Typography>
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
            <Typography variant="body1" sx={{ ml: 0.5, mr: 0.5 }}>
              <ReactMarkdown
                children={contentMap["About"]}
                linkTarget="_blank"
              />
            </Typography>
            <Paper
              elevation={3}
              sx={{
                height: "auto",
                bgcolor: "#605770",
                mr: 1,
                mt: 0.5,
              }}
            >
              <Typography
                variant="body1"
                sx={{ ml: 0.5, color: "#ffffff", mr: 0.5 }}
              >
                <ReactMarkdown
                  children={contentMap["Prospective Students"]}
                  linkTarget="_blank"
                />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ ml: 1.5, mr: 0.5, mt: -2 }}>
              <ReactMarkdown
                children={contentMap["Other Work"]}
                linkTarget="_blank"
              />
            </Typography>
            <Typography variant="body1" align="center" sx={{ mt: 1 }}>
              <ReactMarkdown
                children={contentMap["Links"]}
                linkTarget="_blank"
              />
            </Typography>
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
            <Typography variant="h5" sx={{ ml: 1.5, mr: 0.5 }}>
              Updates
            </Typography>
            <Typography variant="body1" sx={{ ml: 1.5, mr: 0.5 }}>
              <ul>
                <li>
                  [ Nov-2021 ]: Our new report and companion website provides a
                  consolidated overview of coordinate-based neural networks
                  (neural fields) in visual computing and beyond by reviewing
                  over 250 papers.
                </li>
                <li>
                  [ Oct-2021 ]: I helped co-organize the Second 3DReps workshop
                  at ICCV. The workshop recording is now available at this link.
                </li>
                <li>
                  [ Oct-2021 ]: HuMoR, a human motion model for robust pose
                  estimation will be presented at ICCV 2021.
                </li>
                <li>
                  [ Apr-2021 ]: Srinath received a Google Research Scholar award
                  to further the group's research on object-centric
                  perception/synthesis for mixed reality.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Main;
