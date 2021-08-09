import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import axios from "../axios";

import { Error } from "./Error";
import { withRouter } from "react-router-dom";

const LoginPage = ({ history , isAuth: isAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);

    if (userInfo) {
      history.push("/dashboard");
      
    }
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/admin/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      const userInfo = localStorage.getItem("userInfo");
      console.log(userInfo);
      const valueeee = userInfo.name;
      console.log(valueeee);

      if (userInfo) {
        history.push("/dashboard");
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <Error />}

      <form onSubmit={handelSubmit}>
        <div className="logincontainer">
          <div className="logincontainer1">
            <h2>Login Page</h2>
            <div className="loginicon">
              <PersonIcon className="loginiconz" />
              <input
                type="email"
                placeholder="Enter your email"
                className="loginemail"
                name="adminemail"
                id="adminemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="loginicon">
              <LockIcon className="loginiconz" />
              <input
                type="Password"
                placeholder="Enter your password"
                className="loginpassword"
                name="adminpassword"
                id="adminpassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
