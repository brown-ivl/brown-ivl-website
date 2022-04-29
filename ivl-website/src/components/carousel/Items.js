import React from "react";
import Paper from "@mui/material/Paper";

import "./Items.css";

function Items(props) {
  return (
    <div>
      {" "}
      <Paper
        elevation={3}
        sx={{
          mt: 1,
          height: "60vh",
          bgcolor: "#F7F6F2",
        }}
      >
        {/* <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button className="CheckButton">Check it out!</Button> */}
        <img
          className="carousel-item"
          src={props.item.path}
          alt={props.item.name}
        />
      </Paper>
    </div>
  );
}

export default Items;
