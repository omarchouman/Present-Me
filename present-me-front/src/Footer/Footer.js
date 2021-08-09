import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="middle box">
          <div className="footer_section comment">
            <div className="topic">Leave A Comment</div>
            <form action="" method="POST">
              <textarea
                name="comment"
                id="comment"
                cols="20"
                rows="5"
              ></textarea>
              <br />
              <br />
              <button type="submit">Send...</button>
            </form>
          </div>
        </div>
        <div className="right box">
          <h1
            className="boxHead"
            style={{ color: "white", textAlign: "center", paddingTop: "150px" }}
          >
            Present Me
          </h1>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright © 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
