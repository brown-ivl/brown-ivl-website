import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import VideoFileRoundedIcon from "@mui/icons-material/VideoFileRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import PublishedWithChangesRoundedIcon from "@mui/icons-material/PublishedWithChangesRounded";

import ResearchPapers from "../../json/papers/ResearchPapers.json";
import "./Research.css";

function Research() {
  var uniqueCategories = [];
  ResearchPapers.forEach(function (record) {
    if (!uniqueCategories.includes(record.category)) {
      uniqueCategories.push(record.category);
    }
  });
  // console.log(uniqueCategories);

  var uniqueYearsInCategory = {};
  ResearchPapers.forEach(function (record) {
    if (!uniqueYearsInCategory[record.category]) {
      uniqueYearsInCategory[record.category] = [];
    }
    if (!uniqueYearsInCategory[record.category].includes(record.year)) {
      uniqueYearsInCategory[record.category].push(record.year);
    }
  });
  // console.log(uniqueYearsInCategory);

  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          pt: 1,
          m: 1,
          height: "auto",
          bgcolor: "#FFFFFF",
          pb: 2,
        }}
      >
        <Typography sx={{ ml: -0.5, display: "flex", mt: 0.5, mb: 0.5 }}>
          <SchoolRoundedIcon className="inline-scholar-icon"></SchoolRoundedIcon>
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
        {uniqueCategories.map((category) => {
          return (
            <div>
              <div className="center">
                <Typography variant="h5" align="center" marginTop={2}>
                  {category}
                </Typography>
              </div>
              {/* section for each year */}
              {uniqueYearsInCategory[category].map((year) => {
                return (
                  <div>
                    <Typography
                      variant="h5"
                      component="h2"
                      align="left"
                      marginLeft={1}
                      marginTop={1}
                    >
                      {year}
                    </Typography>
                    {ResearchPapers.map((record) => {
                      if (record.category === category) {
                        if (record.year === year) {
                          // image for paper
                          var img = record.image;
                          if (img === "") {
                            img = "images/papers/default.png";
                          } else {
                            img = record.image;
                          }

                          // display pdf option only if pdf field is not empty in json
                          let pdf,
                            video,
                            moreInfo,
                            projectPage,
                            bibTex,
                            googlePatents,
                            pubman;
                          if (record.pdf !== "") {
                            pdf = (
                              <>
                                <PictureAsPdfRoundedIcon className="inline-pdf"></PictureAsPdfRoundedIcon>
                                <Link
                                  href={record.pdf}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  PDF
                                </Link>
                              </>
                            );
                          } else {
                            pdf = "";
                          }
                          if (record.video !== "") {
                            video = (
                              <>
                                <VideoFileRoundedIcon className="inline-video"></VideoFileRoundedIcon>
                                <Link
                                  href={record.video}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  Video
                                </Link>
                              </>
                            );
                          } else {
                            video = "";
                          }
                          if (record.moreInfo !== "") {
                            moreInfo = (
                              <>
                                <InfoRoundedIcon className="inline-info"></InfoRoundedIcon>
                                <Link
                                  href={record.moreInfo}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  More Info
                                </Link>
                              </>
                            );
                          } else {
                            moreInfo = "";
                          }
                          if (record.projectPage !== "") {
                            projectPage = (
                              <>
                                <DashboardRoundedIcon className="inline-project"></DashboardRoundedIcon>
                                <Link
                                  href={record.projectPage}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  Project Page
                                </Link>
                              </>
                            );
                          } else {
                            projectPage = "";
                          }
                          if (record.bibTex !== "") {
                            bibTex = (
                              <>
                                <DataObjectRoundedIcon className="inline-bibTex"></DataObjectRoundedIcon>
                                <Link
                                  href={record.bibTex}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  BibTex
                                </Link>
                              </>
                            );
                          } else {
                            bibTex = "";
                          }
                          if (record.googlePatents !== "") {
                            googlePatents = (
                              <>
                                <InventoryRoundedIcon className="inline-googlePatents"></InventoryRoundedIcon>
                                <Link
                                  href={record.googlePatents}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  Google Patents
                                </Link>
                              </>
                            );
                          } else {
                            googlePatents = "";
                          }
                          if (record.pubman !== "") {
                            pubman = (
                              <>
                                <PublishedWithChangesRoundedIcon className="inline-pubman"></PublishedWithChangesRoundedIcon>
                                <Link
                                  href={record.pubman}
                                  target="_blank"
                                  color="#820000"
                                  underline="none"
                                >
                                  Pubman
                                </Link>
                              </>
                            );
                          } else {
                            pubman = "";
                          }

                          return (
                            <div>
                              <Paper
                                elevation={3}
                                sx={{
                                  pt: 1,
                                  height: "auto",
                                  bgcolor: "#F7F6F2",
                                  pb: 1,
                                  minHeight: "15vh",
                                  m: 1,
                                }}
                              >
                                <Grid container spacing={2}>
                                  <Grid item xs={2}>
                                    <div className="img-div">
                                      <Link
                                        href={record.projectPage}
                                        target="_blank"
                                        color="#820000"
                                        underline="none"
                                      >
                                        <img
                                          className="img-style"
                                          src={img}
                                          alt={record.title}
                                        />
                                      </Link>
                                    </div>
                                  </Grid>
                                  <Grid item xs={10}>
                                    <Link
                                      href={record.projectPage}
                                      target="_blank"
                                      color="#820000"
                                      underline="none"
                                    >
                                      <Typography variant="h6">
                                        {record.title}
                                      </Typography>
                                    </Link>
                                    <Typography variant="body1">
                                      {record.authors}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      sx={{ mt: 0.5 }}
                                    >
                                      <b>{record.journal}</b>
                                    </Typography>
                                    <Typography
                                      sx={{
                                        ml: 2,
                                        display: "flex",
                                        mt: 1.5,
                                        mb: 0.5,
                                      }}
                                    >
                                      {pdf}
                                      {video}
                                      {moreInfo}
                                      {projectPage}
                                      {bibTex}
                                      {googlePatents}
                                      {pubman}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Paper>
                            </div>
                          );
                        }
                      }
                    })}
                  </div>
                );
              })}
              {/* end of section for each year */}
            </div>
          );
        })}
      </Paper>
    </div>
  );
}

export default Research;
