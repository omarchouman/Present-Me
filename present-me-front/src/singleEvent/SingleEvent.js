import React, { useContext, useEffect } from "react";
import "./SingleEvent.css";
import { MyContext } from ".././Context";

const SingleEvent = (props) => {
  const { singlee, setSinglee } = useContext(MyContext);

  return (
    <div className="container-2">
      <h1
        style={{
          textTransform: "uppercase",
          letterSpacing: "4px",
          margin: "1rem 0 1rem 0",
        }}
      >
        {singlee.title}
      </h1>
      <img
        src={singlee.auther}
        className="event__img"
        alt=""
        onClick={() => {
          console.log(singlee);
        }}
      />
      <div className="box-1">
        <div className="event-info">
          <h3>Title: {singlee.title}</h3>
          <h3>Description: {singlee.description} </h3>
          <h3>Event Date: {singlee.date} </h3>
        </div>
        <div className="host-info">
          <img src={singlee.auther} alt="" />
          <h3>{singlee.name}</h3>
        </div>
      </div>
      <button className="btna">Attend</button>
    </div>
  );
};

export default SingleEvent;
