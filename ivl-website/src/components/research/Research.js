import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoFileRoundedIcon from "@mui/icons-material/VideoFileRounded";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import SchoolIcon from "@mui/icons-material/School";

import ResearchPapers from "../../papers/ResearchPapers.json";
import "./Research.css";

function Research() {
  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          pt: 1,
          mt: 1,
          height: "auto",
          minHeight: "100vh",
          bgcolor: "#FFFFFF",
        }}
      >
        <div className="center">
          <Typography variant="h4" component="h1" align="center">
            Publications
          </Typography>
        </div>
        <Typography sx={{ ml: 0, display: "flex", mt: 0.5, mb: 0.5 }}>
          <SchoolIcon className="inline-scholar-icon"></SchoolIcon>
          <Link
            href={
              "https://scholar.google.com/citations?user=qIvZT74AAAAJ&hl=en"
            }
            target="_blank"
            color="#820000"
            underline="none"
            sx={{ ml: 0.5 }}
          >
            Google Scholar
          </Link>
        </Typography>
        {ResearchPapers.map((item, index) => {
          return (
            <div>
              <Paper
                elevation={3}
                sx={{
                  pt: 1,
                  mt: 1,
                  height: "auto",
                  bgcolor: "#F7F6F2",
                  ml: 1,
                  mr: 1,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <div>
                      <h3>Image here</h3>
                    </div>
                  </Grid>
                  <Grid item xs={10}>
                    <Link
                      href={item.projectPage}
                      target="_blank"
                      color="#820000"
                      underline="none"
                    >
                      <Typography variant="h6">{item.title}</Typography>
                    </Link>
                    <Typography variant="body1">{item.authors}</Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      <b>{item.journal}</b>
                    </Typography>
                    <Typography
                      sx={{ ml: 2, display: "flex", mt: 0.5, mb: 0.5 }}
                    >
                      <PictureAsPdfIcon className="inline-pdf"></PictureAsPdfIcon>
                      <Link
                        href={item.pdf}
                        target="_blank"
                        color="#820000"
                        underline="none"
                      >
                        PDF
                      </Link>
                      <VideoFileRoundedIcon className="inline-video"></VideoFileRoundedIcon>
                      <Link
                        href={item.video}
                        target="_blank"
                        color="#820000"
                        underline="none"
                      >
                        Video
                      </Link>
                      <InfoOutlinedIcon className="inline-info"></InfoOutlinedIcon>
                      <Link
                        href={item.moreInfo}
                        target="_blank"
                        color="#820000"
                        underline="none"
                      >
                        More Info
                      </Link>
                      <DashboardTwoToneIcon className="inline-project"></DashboardTwoToneIcon>
                      <Link
                        href={item.projectPage}
                        target="_blank"
                        color="#820000"
                        underline="none"
                      >
                        Project Page
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        })}
      </Paper>
    </div>
  );
}

export default Research;
