import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./new.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Aos from "aos";

const slideImages = [
  {
    id: 1,
    discrption: [
      { subject: "Math" },
      { subject: "Bio" },
      { subject: "chimestry" },
    ],

    title: "Education",
  },
  {
    id: 2,
    discrption: [
      { subject: "Football" },
      { subject: "Baseball" },
      { subject: "basketball" },
      { subject: "Abed" },
    ],
    title: "Sport",
  },
  {
    id: 3,
    discrption: [
      { subject: "Plitical-1" },
      { subject: "Plitical-2" },
      { subject: "Plitical-3" },
    ],
    title: "Political",
  },
];

function New(props) {
  const [des, setDes] = useState([]);
  let history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="btn">
      {slideImages.map((imageUrl, index) => (
        <div key={index}>
          <button
            data-aos="fade-up"
            id={imageUrl.id}
            className="btn-style"
            onClick={() => {
              history.push("/discover");
            }}
          >
            {imageUrl.title}
          </button>
        </div>
      ))}
    </div>
  );
}
export default New;
