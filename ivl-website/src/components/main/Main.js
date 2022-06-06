import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Collapsible from "react-collapsible";
import Box from "@mui/material/Box";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";

import Images from "../../json/home/Images.json";
import HomePage from "../../md/main/HomePage.md";
import parseContent from "../../utils/MarkdownParsing";
import "./Main.css";

const Main = () => {
  const [contentMap, setContentMap] = useState({});

  useEffect(() => {
    // Fetch text from markdown file
    fetch(HomePage)
      .then((res) => res.text())
      .then((text) => setContentMap(parseContent(text)));
  }, []);

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
              <Box sx={{ ml: 2, mt: -6.5 }}>
                <ReactMarkdown
                  children={contentMap["Title"]}
                  linkTarget="_blank"
                  className="format-title"
                />
              </Box>
              <Box sx={{ ml: 2, display: "flex", mt: 4 }}>
                <EmailRoundedIcon className="inline-icon"></EmailRoundedIcon>
                <ReactMarkdown
                  children={contentMap["Email"]}
                  linkTarget="_blank"
                  className="inline-email"
                />
              </Box>
              <Box sx={{ ml: 2, mt: 7 }}>
                <ReactMarkdown
                  children={contentMap["Address"]}
                  linkTarget="_blank"
                  className="format-address"
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={4}>
            <img
              className="dp"
              src={Images.filter((image) => image.name === "headshot")[0].path}
              alt={Images.filter((image) => image.name === "headshot")[0].alt}
            />
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
          <Grid item xs={12}>
            <Box sx={{ pl: 1, pr: 1, mt: -2.5 }}>
              <ReactMarkdown
                children={contentMap["About"]}
                linkTarget="_blank"
              />

              <ReactMarkdown
                children={contentMap["Other Work"]}
                linkTarget="_blank"
              />
            </Box>
            <Paper
              elevation={3}
              sx={{
                height: "auto",
                bgcolor: "#605770",
                pl: 1,
                pr: 1,
                mt: 1.5,
                ml: 1,
                mr: 1,
              }}
            >
              <Box sx={{ ml: 0.5, color: "#ffffff", mr: 0.5 }}>
                <ReactMarkdown
                  children={contentMap["Prospective Students"]}
                  linkTarget="_blank"
                />
              </Box>
            </Paper>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: -1 }}
            >
              <Box display="flex">
                <ArticleRoundedIcon
                  sx={{ mt: 2, mr: 0.2 }}
                ></ArticleRoundedIcon>
                <ReactMarkdown
                  children={contentMap["CV"]}
                  linkTarget="_blank"
                />
                <SchoolRoundedIcon
                  sx={{ mt: 2, ml: 1, mr: 0.2 }}
                ></SchoolRoundedIcon>
                <ReactMarkdown
                  children={contentMap["Scholar"]}
                  linkTarget="_blank"
                />
                <CodeRoundedIcon
                  sx={{ mt: 2, ml: 1, mr: 0.2 }}
                ></CodeRoundedIcon>
                <ReactMarkdown
                  children={contentMap["GitHub"]}
                  linkTarget="_blank"
                />
                <MessageRoundedIcon
                  sx={{ mt: 2, ml: 1, mr: 0.2 }}
                ></MessageRoundedIcon>
                <ReactMarkdown
                  children={contentMap["Twitter"]}
                  linkTarget="_blank"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ ml: 1.5, mt: 0.5 }}>
              {" "}
              Updates
            </Typography>
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
