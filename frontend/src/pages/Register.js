import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //Resetting the form fields
    navigate("/login");
    alert("registration successful");
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div className="mx-auto py-[40px] w-[600px] bg-slate-50 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <h1 className="text-center text-3xl text-gray-700 font-roboto font-bold pb-5">
          Create an account
        </h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <input
            className="px-2 py-2 bg-white rounded-sm w-[500px] text-sm outline-gray-500"
            type="text"
            placeholder="First name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            className="px-2 py-2 bg-white rounded-sm w-[500px] text-sm outline-gray-500"
            type="text"
            placeholder="Last name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            className="px-2 py-2 bg-white rounded-sm w-[500px] text-sm outline-gray-500"
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            className="px-2 py-2 bg-white rounded-sm w-[500px] text-sm outline-gray-500"
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            autoComplete="off"
          />
          <button
            onClick={handleRegister}
            className="px-2 py-2 bg-gray-800 text-white rounded-sm w-[500px]"
          >
            Register
          </button>
        </div>
        <div className="flex justify-center items-center my-3">
          <p className="text-sm text-gray-500">
            Already have an account?
            <a className="text-sm text-gray-800 mx-1 underline" href="Login">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default Register;
