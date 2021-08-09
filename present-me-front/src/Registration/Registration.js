import React from "react";
import "./Registration.css";
export const Registration = () => {
  return (
    <div className="registrationcontainer">
      <div className="registrationbox regtitle">Registration</div>
      <div className="registrationbox">
        <label for="name">Name</label>
        <br />
        <input type="text" placeholder="Enter Name" name="name" id="name" />
      </div>
      <div className="registrationbox">
        <label for="email">Email</label>
        <br />
        <input type="email" placeholder="Enter Email" name="email" id="email" />
      </div>
      <div className="registrationbox">
        <label for="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          id="password"
        />
      </div>
      <div className="registrationbox">
        <label for="confirmpassword">Confirm Password</label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          id="confirmpassword"
        />
      </div>
      <div className="registrationbox">
        <label for="profile">Profile Picture</label>

        <br />
        <input type="file" id="profile" name="profile" />

        <br />
      </div>

      <div className="registrationbox">
        <button type="submit" className="regsub">Submit</button>
      </div>
    </div>
  );
};
