import React from "react";
import loginImg from "../../images/87718-waiting-register.gif";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const MangeProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  // use form
  const { register, handleSubmit, reset } = useForm();
  // history
  const navigate = useNavigate();
  // submit form
  const onSubmit = (data) => {
    // console.log(data);
    if (data.password !== user.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check Your Old Password",
      });
      return;
    }
    const userData = {
      displayName: data.name,
      password: data.password1,
    };
    axios
      .put(`http://localhost:5000/update/${user._id}`, userData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Updated Successfully",
          text: res.data.message,
        });
      });
    reset();
    navigate("/home");
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="form_container">
                <h2 className="text-center mb-4">Update Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder={user.displayName}
                  />

                  <input
                    type="password"
                    {...register("password")}
                    placeholder="enter old password"
                  />
                  <input
                    type="password"
                    {...register("password1")}
                    placeholder="enter New Password"
                  />
                  <Button variant="success" type="submit" value="Register">
                    Update
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangeProfile;
