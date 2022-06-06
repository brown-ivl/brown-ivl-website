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

import ResearchPapers from "../../json/papers/ResearchPapers.json";
import "./Research.css";

function Research() {
  var uniqueYears = [];
  ResearchPapers.forEach(function (record) {
    if (!uniqueYears.includes(record.year)) {
      uniqueYears.push(record.year);
    }
  });
  // console.log(uniqueYears);

  return (
    <div>
      {/* <Paper
        elevation={3}
        sx={{
          pt: 1,
          mt: 1,
          height: "auto",
          bgcolor: "#F7F6F2",
          pb: 2,
        }}
      > */}
      <div className="center">
        <Typography variant="h5" align="center" marginTop={1.5}>
          Publications
        </Typography>
      </div>
      <Typography sx={{ ml: -0.5, display: "flex", mt: 0.5, mb: 0.5 }}>
        <SchoolRoundedIcon className="inline-scholar-icon"></SchoolRoundedIcon>
        <Link
          href={"https://scholar.google.com/citations?user=qIvZT74AAAAJ&hl=en"}
          target="_blank"
          color="#820000"
          underline="none"
          sx={{ ml: 0.5 }}
        >
          Google Scholar
        </Link>
      </Typography>
      {/* section for each year */}
      {uniqueYears.map((year) => {
        return (
          <div key={year}>
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
              if (record.year === year) {
                // image for paper
                var img = record.image;
                if (img === "") {
                  img = "images/papers/default.png";
                } else {
                  img = record.image;
                }
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
                        minHeight: "20vh",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <div className="img-div">
                            <img
                              className="img-style"
                              src={img}
                              alt={record.title}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={10}>
                          <Link
                            href={record.projectPage}
                            target="_blank"
                            color="#820000"
                            underline="none"
                          >
                            <Typography variant="h6">{record.title}</Typography>
                          </Link>
                          <Typography variant="body1">
                            {record.authors}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 0.5 }}>
                            <b>{record.journal}</b>
                          </Typography>
                          <Typography
                            sx={{ ml: 2, display: "flex", mt: 0.5, mb: 0.5 }}
                          >
                            <PictureAsPdfRoundedIcon className="inline-pdf"></PictureAsPdfRoundedIcon>
                            <Link
                              href={record.pdf}
                              target="_blank"
                              color="#820000"
                              underline="none"
                            >
                              PDF
                            </Link>
                            <VideoFileRoundedIcon className="inline-video"></VideoFileRoundedIcon>
                            <Link
                              href={record.video}
                              target="_blank"
                              color="#820000"
                              underline="none"
                            >
                              Video
                            </Link>
                            <InfoRoundedIcon className="inline-info"></InfoRoundedIcon>
                            <Link
                              href={record.moreInfo}
                              target="_blank"
                              color="#820000"
                              underline="none"
                            >
                              More Info
                            </Link>
                            <DashboardRoundedIcon className="inline-project"></DashboardRoundedIcon>
                            <Link
                              href={record.projectPage}
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
              }
            })}
          </div>
        );
      })}
      {/* </Paper> */}
    </div>
  );
}

export default Research;
