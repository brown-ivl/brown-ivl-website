import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import People from "../../json/people/People.json";

export default function RecipeReviewCard() {
  var uniqueCategories = [];
  People.forEach(function (record) {
    if (!uniqueCategories.includes(record.category)) {
      uniqueCategories.push(record.category);
    }
  });
  console.log(uniqueCategories);

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
        {uniqueCategories.map((category) => {
          return (
            <div key={category}>
              <div className="center">
                <Typography variant="h5" align="center" marginTop={1.5}>
                  {category}
                </Typography>
              </div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{ pl: 1, pr: 1, mt: 0.5 }}
              >
                {People.map((person) => {
                  var imagePath = person.imgPath;
                  if (imagePath === "") {
                    imagePath = "/images/people/default.png";
                  } else {
                    imagePath = person.imgPath;
                  }
                  if (person.category === category) {
                    return (
                      <Grid item key={person.name}>
                        <Card sx={{ width: 250, textAlign: "center" }}>
                          <CardMedia
                            component="img"
                            image={imagePath}
                            alt={person.alt}
                            sx={{ width: "100%", height: 250 }}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {person.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {person.Years}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </div>
          );
        })}

        {/* <Paper
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
      </Paper> */}
      </Paper>
    </div>
  );
}
