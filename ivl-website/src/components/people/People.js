import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import People from "../../json/people/People.json";
import "./People.css";

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
          pb: 1,
          m: 1,
          height: "auto",
          bgcolor: "#F7F6F2",
        }}
      >
        {uniqueCategories.map((category) => {
          if (category !== "Brown IVL Alumni") {
            return (
              <div key={category}>
                <div className="center">
                  <Typography variant="h5" align="center" marginTop={2}>
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
                      imagePath = "images/people/default.png";
                    } else {
                      imagePath = person.imgPath;
                    }
                    if (person.category === category) {
                      return (
                        <Grid item key={person.name}>
                          <Card
                            sx={{
                              width: 200,
                              height: 310,
                              textAlign: "center",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={imagePath}
                              alt={person.alt}
                              sx={{ width: "100%", height: 200 }}
                            />
                            <CardContent>
                              <Link
                                href={person.link}
                                target="_blank"
                                color="#820000"
                                underline="none"
                              >
                                <Typography variant="h6">
                                  {person.name}
                                </Typography>
                              </Link>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {person.years}
                              </Typography>
                              {person.moreInfo !== "" ? (
                                <Typography variant="subtitle2" component="p">
                                  {person.moreInfo}
                                </Typography>
                              ) : null}
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </div>
            );
          } else {
            return (
              <div key={category}>
                <div className="center">
                  <Typography variant="h5" align="left" marginTop={2}>
                    {category}
                  </Typography>
                </div>

                {People.map((person) => {
                  if (person.category === category) {
                    return (
                      <div className="alumni-format-vertical center">
                        <div className="alumni-format-horizontal center">
                          <Typography align="left" marginTop={1} marginLeft={2}>
                            {person.name} ({person.years}) -
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                            marginTop={1.2}
                            marginLeft={0.5}
                          >
                            {person.status}
                          </Typography>
                        </div>
                        {person.additionalInfo !== "" ? (
                          <Typography
                            variant="subtitle2"
                            className="format-additionalInfo"
                          >
                            {person.additionalInfo}
                          </Typography>
                        ) : null}
                      </div>
                    );
                  }
                })}
              </div>
            );
          }
        })}
      </Paper>
    </div>
  );
}
