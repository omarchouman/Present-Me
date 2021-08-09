import React from "react";
import "./TopEvent.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "./images/slider_1.jpg";
import image2 from "./images/slider_2.jpg";
import image3 from "./images/slider_3.jpg";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";

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

export const Slideshow = () => {
  return (
    <div>
      <div className="flex">
        <div className="slide-container">
          <Slide>
            {slideImages.map((obj, index) => {
              return (
                <div key={obj.index} className="each-slide">
                  <div style={{ backgroundImage: `url(${obj.image})` }}>
                    <span>{obj.title}</span>
                  </div>
                </div>
              );
            })}
          </Slide>
        </div>
      </div>
    </div>
  );
};
