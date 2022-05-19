import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Item from "../carousel/Items.js";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactMarkdown from "react-markdown";

import Gif from "../../images/placeholders/trippy_gif.webp";
import CarouselContent from "../../json/ivlhome/Carousel.json";
import IvlHomePage from "../../md/ivlhome/Ivl.md";
import parseContent from "../../utils/MarkdownParsing";
import "./IvlHome.css";

function IvlHome() {
  const [contentMap, setContentMap] = useState({});

  useEffect(() => {
    // Fetch text from markdown file
    fetch(IvlHomePage)
      .then((res) => res.text())
      .then((text) => setContentMap(parseContent(text)));
  }, []);

  return (
    <div>
      <Typography variant="h5" align="center" sx={{ mt: -1 }}>
        <ReactMarkdown children={contentMap["Title"]} linkTarget="_blank" />
      </Typography>
      <Carousel
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#605770", // 2
          },
        }}
        sx={{ mt: -1.5 }}
      >
        {CarouselContent.map((record, i) => (
          <Item key={i} item={record} />
        ))}
      </Carousel>
      <Paper
        elevation={3}
        sx={{
          pt: 1,
          mt: 1,
          height: "auto",
          bgcolor: "#F7F6F2",
        }}
      >
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ pl: 1, pr: 1 }}
        >
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ ml: 0.5, mr: 0.5, mt: -1 }}>
              <ReactMarkdown
                children={contentMap["Introduction 1"]}
                linkTarget="_blank"
              />
            </Typography>
            <Typography variant="body1" sx={{ ml: 0.5, mr: 0.5, mt: 0.5 }}>
              <ReactMarkdown
                children={contentMap["Introduction 2"]}
                linkTarget="_blank"
              />
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <img className="gif" src={Gif} alt="Trippy gif" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ pl: 1, pr: 1 }}
        >
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, mt: -1.5 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <ReactMarkdown
                    children={contentMap["Card Title"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography variant="h5" sx={{ mt: -1.5 }}>
                  <ReactMarkdown
                    children={contentMap["Card Header"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography color="text.secondary" sx={{ mt: -1.5 }}>
                  <ReactMarkdown
                    children={contentMap["Card Subtitle"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography variant="body2">
                  <ReactMarkdown
                    children={contentMap["Card Content"]}
                    linkTarget="_blank"
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, mt: -1.5 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <ReactMarkdown
                    children={contentMap["Card Title"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography variant="h5" sx={{ mt: -1.5 }}>
                  <ReactMarkdown
                    children={contentMap["Card Header"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography color="text.secondary" sx={{ mt: -1.5 }}>
                  <ReactMarkdown
                    children={contentMap["Card Subtitle"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography variant="body2">
                  <ReactMarkdown
                    children={contentMap["Card Content"]}
                    linkTarget="_blank"
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, mt: -1.5 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <ReactMarkdown
                    children={contentMap["Card Title"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography variant="h5" sx={{ mt: -1.5 }}>
                  <ReactMarkdown
                    children={contentMap["Card Header"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography color="text.secondary" sx={{ mt: -1.5 }}>
                  <ReactMarkdown
                    children={contentMap["Card Subtitle"]}
                    linkTarget="_blank"
                  />
                </Typography>
                <Typography variant="body2">
                  <ReactMarkdown
                    children={contentMap["Card Content"]}
                    linkTarget="_blank"
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ pl: 1, pr: 1 }}
        >
          <Grid item xs={12}>
            <Typography variant="body1">
              <ReactMarkdown
                children={contentMap["Main Content"]}
                linkTarget="_blank"
              />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default IvlHome;
