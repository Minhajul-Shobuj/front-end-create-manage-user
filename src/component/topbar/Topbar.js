import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import avatar from "../../images/shobuj.png";
import { Button } from "react-bootstrap";
const Topbar = ({ logout }) => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <span className="logo">Simple Login/Register App</span>
        <div className="topRight">
          <div className="notificationContainer"></div>
          <div className="notificationContainer">
            <Link to="/profile">
              <Button variant="success">Profile</Button>
            </Link>
            <img src={avatar} alt="avatar" className="topAvatar" />
          </div>
          <div className="notificationContainer">
            <button onClick={() => logout()}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
