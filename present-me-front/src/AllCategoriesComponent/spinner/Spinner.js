import React, { Fragment } from "react";
import spinner from "./Spinner.gif";
export const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="loading..."
      style={{
        color: "blue",
        width: "200px",
        margin: "auto",
        display: "block",
      }}
    />
  </Fragment>
);
