import React, { useState, useContext, useEffect } from "react";
import { Modal } from "./Modal";
import "./Popup.css";
import axios from ".././axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { MyContext } from "../Context";
AOS.init();

const POPBOX = {
  display: "flex",
  flexDirection: "column",
  backgroundcolor: "red",
  border: "5px solid red",
};

const BUTTON_COMPONENT = {
  margin: "5px",
};

//add

export const Dashback = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState([]);

  const [yow, setYow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("mainw");
      setYow(req.data);
    }
    fetchData();
  }, []);

  const handeldeletesub = (e) => {
    e.preventDefault();
    e.stopPropagation();
    async function fetchData() {
      const req = await axios.delete(`subcategories/${e.target.id}`);
    }
    fetchData();
  };
  const handeldeletemain = (e) => {
    e.preventDefault();
    e.stopPropagation();
    async function fetchData() {
      const req = await axios.delete(`maincategories/${e.target.id}`);
    }
    fetchData();
  };

  const { singlee, setSinglee, subid, setSubid } = useContext(MyContext);

  const handelCreateSub = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubid(e.target.id);
    console.log(subid);
    history.push("/createsubbevent");
  };
  const handelCreateSingle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubid(e.target.id);
    console.log(subid);
    history.push("/createsingleevent");
  };

  const gotosingle = (e) => {
    e.preventDefault();
    {
      info.map((show) => {
        if (show._id == e.target.id) {
          console.log("show id =" + show._id);
          console.log("target id =" + e.target.id);
          console.log(show.single);
          setSinglee(show.events);
        }
      });
    }
    history.push("/singles");
  };

  const ifclick = (e) => {
    e.preventDefault();
    {
      yow.map((values) => {
        if (values._id == e.target.id) {
          setInfo(values.reviews);
          console.log("first " + values._id);
          console.log("first " + e.target.id);
          console.log(info);
        }
      });
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashbaord-btn">
          <button
            onClick={() => {
              history.push("/createmainevent");
            }}
          >
            Create main
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("userInfo");
              history.push("/");
            }}
          >
            logout
          </button>
        </div>
        <div className="grid-box">
          {yow.map((obj, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                backgroundImage: `url(${obj.imgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "-1px 4px 20px -6px rgba(10,10,10,0.75)",
              }}
              onClick={() => setIsOpen(true)}
              // data-aos="fade-up-right"
            >
              <button
                id={obj._id}
                onClick={ifclick}
                className="hiddenbutton"
              ></button>
              <div className="singleboxttitle">{obj.title}</div>
              <div className="btnmainone">
                <button>edit</button>
                <button id={obj._id} onClick={handeldeletemain}>
                  delete
                </button>
                <button id={obj._id} onClick={handelCreateSub}>
                  Create Sub
                </button>
              </div>
            </div>
          ))}
        </div>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <form>
            <div className="overpop">
              {info.map((obj, index) => (
                <div style={POPBOX}>
                  <button
                    style={BUTTON_COMPONENT}
                    id={obj._id}
                    onClick={gotosingle}
                  >
                    {obj.title}
                  </button>
                  <div>
                    <button style={{ backgroundcolor: "blue", margin: "3rem" }}>
                      edit
                    </button>
                    <button id={obj._id} onClick={handeldeletesub}>
                      delete
                    </button>
                    <button
                      id={obj._id}
                      onClick={handelCreateSingle}
                      className="dashfunbtn delbtnz"
                    >
                      Create Sub
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
