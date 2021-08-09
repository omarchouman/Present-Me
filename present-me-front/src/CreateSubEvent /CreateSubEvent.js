import React, { useState, useContext } from "react";
import { MyContext } from "../Context";
import "./createsubevent.css";
import axios from "axios";
function CreateSubEvent({history}) {
  const {subid, setSubid } = useContext(MyContext);
  const [subevent, setSubevent] = useState({
    title: "",
    description: "",
    date: "",
    name: "",
    auther: "",
    event: "",
  });
  const { title, description, date, name, auther, event } = subevent;
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
      .post(`http://localhost:8009/singlecategories/${subid}`, subevent)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log(response);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
      history.push("/discover");
  };
  console.log(subevent);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Create Single Event</h1>
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
              <label>Event Description</label>
            </div>
            <div>
              <textarea
                name="description"
                value={description}
                type="text"
                onChange={onChange}
              ></textarea>
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Auther Name</label>
            </div>
            <div>
              <input name="name" value={name} type="text" onChange={onChange} />
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Event Date</label>
            </div>
            <div>
              <input name="date" value={date} type="date" onChange={onChange} />
            </div>
          </div>

          <div className="flex-form">
            <div>
              <label>Auther Image</label>
            </div>
            <div>
            <input name="auther" value={auther} type="text" onChange={onChange} />
            </div>
          </div>
          <div className="flex-form">
            <div>
              <label>Event Image</label>
            </div>
            <div>
            <input name="event" value={event} type="text" onChange={onChange} />
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

export default CreateSubEvent;
