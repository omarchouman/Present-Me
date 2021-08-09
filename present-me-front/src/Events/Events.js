import React, { useState, useEffect } from "react";
import "./Events.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import axios from "../axios";

export const MainSlideshow = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("home");
      setPeople(req.data);
      console.log(people);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="flexs">
        <div className="slide-containers">
          <Slide>
            {people.map((obj, index) => {
              return (
                <div key={index} className="each-slides">
                  <div style={{ backgroundImage: `url(${obj.imgUrl})` }}>
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
