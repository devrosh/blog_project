import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", user);
      const token = response.data.token;
      alert("Login successful");
      navigate("/account");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  return (
    <>
      <div className="mx-auto p-[10px] w-[600px]  h-auto bg-slate-50 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <h1 className="text-center text-3xl text-gray-700 font-roboto font-bold m-16">
          Lets Login
        </h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <input
            className="px-2 py-2 bg-white rounded-sm w-[500px] text-sm outline-gray-500"
            type="email"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="px-2 py-2 bg-white rounded-sm w-[500px] text-sm outline-gray-500"
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            className="px-2 py-2 bg-gray-700 text-white rounded-sm w-[500px]"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="flex justify-center items-center my-5">
          <p className="text-sm text-gray-500">
            Don't have an account?
            <a className="text-sm text-gray-800 mx-1 underline" href="register">
              Register
            </a>
          </p>
        </div>
      </div>
      <Footer className="mt-[50px]" />
      <Copyright />
    </>
  );
}

export default Login;
