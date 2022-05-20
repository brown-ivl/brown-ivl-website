import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function RecipeReviewCard() {
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
        <Typography variant="h5" align="center">
          Principal Investigator
        </Typography>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ pl: 1, pr: 1, mt: 0.5 }}
        >
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" marginTop={2}>
          PhD Students
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ pl: 1, pr: 1, mt: 0 }}
        >
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" marginTop={1.5}>
          Undergraduate / Masters Students
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ pl: 1, pr: 1, mt: 0 }}
        >
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, textAlign: "center" }}>
              <CardMedia
                component="img"
                image="/images/people/default.png"
                alt="default image"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Some sub text
                </Typography>
                <Typography variant="body2">(2018 - 2022)</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
