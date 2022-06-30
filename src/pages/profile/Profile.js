import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h4>Name: {user.displayName}</h4>
      <h4>Email: {user.email}</h4>
      <Link to="/manageProfile">
        <Button variant="success">Update Profile</Button>
      </Link>
    </div>
  );
};

export default Profile;
