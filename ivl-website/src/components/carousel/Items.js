import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Items(props) {
  return (
    <div>
      {" "}
      <Paper
        sx={{
          pt: 1,
          mt: 1,
          height: "50vh",
          bgcolor: "#F7F6F2",
        }}
      >
        {/* <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button className="CheckButton">Check it out!</Button> */}
        <img
          className="img-style"
          src={props.item.path}
          alt={props.item.name}
        />
      </Paper>
    </div>
  );
}

export default Items;
