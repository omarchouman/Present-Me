import React, { useEffect } from "react";
import "../titles/title.css";
import aos from "aos";
import "aos/dist/aos.css";
function Tittle({ title }) {
  useEffect(() => {
    aos.init({ duration: 1000 });
  });
  return (
    <div data-aos="zoom-in" className="title-1">
      <h1>{title}</h1>
    </div>
  );
}

export default Tittle;
