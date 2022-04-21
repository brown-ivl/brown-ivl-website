import React, { useState } from "react";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Item from "../carousel/Items.js";

function IvlHome() {
  const [items, setItems] = useState([
    {
      name: "Carousel 1",
      path: "/images/carousel/stock1.avif",
    },
    {
      name: "Carousel 2",
      path: "/images/carousel/stock2.avif",
    },
    {
      name: "Carousel 3",
      path: "/images/carousel/stock3.avif",
    },
  ]);
  return (
    <div>
      <Typography variant="h4" component="h1" align="center" marginTop={0.5}>
        Interactive 3D Vision & Learning Lab (IVL)
      </Typography>
      <Carousel
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#605770", // 2
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default IvlHome;
