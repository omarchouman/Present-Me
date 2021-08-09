import React, { useEffect, useState } from "react";
import "./allEventsSubCategory.css";
import image1 from "./images/slider_1.jpg";
import image2 from "./images/slider_2.jpg";
import image3 from "./images/slider_3.jpg";

export const AllEventsSubCategory = () => {


const slideImages = [
  {
    image: image1,
    title: "hey",
  },
  {
    image: image2,
    title: "hey",
  },
  {
    image: image3,
    title: "hey",
  },
];
  return (
    <div className="dashboardContainerevent">
      {slideImages.map((obj, index) => {
        return (
          <div className="each-slides-dashboardevent">
            <div className="eventboxzz">
              <div style={{ backgroundImage: `url(${obj.image})` }} className="backbox">
                <div className="boxin">title:{obj.title}</div>
              </div>

              <button className="editevent">CLick for more</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
