import React from "react";
import Masonry from "react-masonry-css";
import { Pin } from "./Pin";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

export const MasonryLayout = ({ pins }: any) => (
  <Masonry
    className="flex animate-slide-fwd"
    breakpointCols={breakpointColumnsObj}
  >
    {pins?.map((pin:any) => (
      <Pin key={pin._id} pin={pin} className="w-max" />
    ))}
  </Masonry>
);