import React, { useState, useContext, useEffect } from "react";
import { Modal } from "./Modal";
import "./Popup.css";
// import Education from "./imagePop/index.jpeg";
// import Sport from "./imagePop/index1.jpeg";
// import Music from "./imagePop/index2.jpg";
import axios from "../../axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { MyContext } from "../../Context";
import { Spinner } from "../spinner/Spinner";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const BUTTON_COMPONENT = {
  margin: "5px",
};

//add

export const Popup = ({ history, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState([]);

  const [yow, setYow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("mainw");
      setYow(req.data);
    }
    fetchData();
    Aos.init({ duration: 2000 });
  }, []);

  const { singlee, setSinglee } = useContext(MyContext);
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
          setIsOpen(true);
          console.log("first " + values._id);
          console.log("first " + e.target.id);
          console.log(info);
        }
      });
    }
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div style={BUTTON_WRAPPER_STYLES}>
          <div className="grid-box">
            {yow.map((obj, index) => (
              <div
                data-aos="fade-down"
                key={index}
                style={{
                  position: "relative",
                  backgroundImage: `url(${obj.imgUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  boxShadow: "-1px 4px 20px -6px rgba(10,10,10,0.75)",
                }}

                // data-aos="fade-up-right"
              >
                <button
                  id={obj._id}
                  onClick={ifclick}
                  className="singleboxttitle"
                >
                  {obj.title}
                </button>
              </div>
            ))}
          </div>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <form>
              <div>
                {info.map((obj, index) => (
                  <div className="pop-box">
                    <button
                      className="sub-btn-style"
                      id={obj._id}
                      onClick={gotosingle}
                    >
                      {obj.title}
                    </button>
                  </div>
                ))}
              </div>
            </form>
          </Modal>
        </div>
      </>
    );
  }
};
