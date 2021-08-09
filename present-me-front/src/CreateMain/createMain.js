import React, { useState } from "react";

import "./CreateMain.css";
import axios from "axios";
export function CreateMainEvent() {
  const [subevent, setSubevent] = useState({
    imgUrl: "",
    title: "",
    
    
  });
  const { imgUrl,title } = subevent;
  const onChange = (e) => {
    setSubevent({ ...subevent, [e.target.name]: e.target.value });
  };

  const onSubmet = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios
      .post("https://presentt-me.herokuapp.com/maincategories", subevent)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log(response);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };
  console.log(subevent);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Create Main Event</h1>
      </div>
      <div className="main-form">
        <form onSubmit={onSubmet}>
          <div className="flex-form">
            <div>
              <label>Title</label>
            </div>
            <div>
              <input
                type="text"
                value={title}
                name="title"
                onChange={onChange}
              />
            </div>
          </div>
          
          <div className="flex-form">
            <div>
              <label>Image Url</label>
            </div>
            <div>
              <input name="imgUrl" value={imgUrl} type="imgUrl" onChange={onChange} />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <input className="btn-2" name="add Event" type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
