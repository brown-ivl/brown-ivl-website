import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";

import Logo from "../../images/placeholders/stocklogo.jpeg";
import Headshot from "../../images/placeholders/plHeadshot.png";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          pt: 1,
          mt: 1,
          height: "auto",
          bgcolor: "#F7F6F2",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <div sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3" sx={{ ml: 2 }}>
                Srinath Sridhar
              </Typography>
              <div>
                <EmailIcon sx={{ ml: 2 }} className="inline-icon"></EmailIcon>
                <Link href="#" sx={{ ml: 0.5 }}>
                  srinath@brown.edu
                </Link>
              </div>
              <Typography variant="subtitle2" sx={{ ml: 2 }}>
                CIT 407, 115 Waterman Street, Providence, RI 02912
              </Typography>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="fill">
              <img className="logo" src={Logo} alt="Brown Logo" />
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={5}
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
              I am an assistant professor in the Department of Computer Science
              at Brown University. My research is in 3D computer vision and
              machine learning. Specifically, I am interested in 3D
              spatiotemporal visual understanding of human physical
              interactions. I build methods for human-centric, object-centric,
              and interaction-centric understanding of our world from videos and
              images.
            </Typography>
            <Paper
              elevation={5}
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
                Prospective Students: We are always looking for motivated
                students to join us. Please see this page for information on PhD
                admissions. If you are already an undergrad/grad at Brown,
                please email me directly.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ ml: 1.5, mr: 0.5 }}>
              I am an assistant professor in the Department of Computer Science
              at Brown University. My research is in 3D computer vision and
              machine learning. Specifically, I am interested in 3D
              spatiotemporal visual understanding of human physical
              interactions. I build methods for human-centric, object-centric,
              and interaction-centric understanding of our world from videos and
              images.
            </Typography>
            <Typography variant="body1" align="center" sx={{ mt: 1 }}>
              CV / Google Scholar / Github / Twitter
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={5}
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
