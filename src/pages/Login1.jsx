import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import loginImg from "../assets/trees.jpg";
//import { Link } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8085/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function signupUser(credentials) {
  return fetch("http://localhost:8085/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login1({ setToken, setUser }) {
  const [view, setView] = useState("login");
  //const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await (view === "login"
      ? loginUser({
          username,
          password,
        })
      : signupUser({
          phoneNumber,
          username,
          password,
        }));
   
    setToken(data.token);
    setUser(data.user);
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-4 rounded-md w-[350px] md:w-[400px]">
          <h2 className="text-4xl font-bold text-center py-4">
            Digi Cylinders
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between py-8">
              <p className="border shadow-lg hover:shadow-xl px-4 py-1 relative flex items-center rounded-full">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="border shadow-lg hover:shadow-xl px-4 py-1 relative flex items-center rounded-full">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div>
            {/* {view === "signup" && (
              <div className="flex flex-col mb-2">
                <label>Email</label>
                <input
                  className="border relative bg-gray-100 p-[4px]"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )} */}
            {view === "signup" && (
              <div className="flex flex-col mb-2">
                <label>Phone Number</label>
                <input
                  className="border relative bg-gray-100 p-[4px]"
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            )}
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input
                className="border relative bg-gray-100 p-[4px]"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-[4px]"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* {view === "sigup" && (
              <div className="flex flex-col">
                <label>Confirm Password</label>
                <input
                  className="border relative bg-gray-100 p-[4px]"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )} */}
            <button
              className="w-full py-2 mt-6 mb-2 bg-green-600 hover:bg-green-500 relative text-white rounded-full"
              type="submit"
            >
              {view === "login" ? "Log In" : "Signup"}
            </button>
            <div>
              <Checkbox label="Remember Me" className="mt-0" />
              <div className="flex items-center justify-between">
                <p className="ml-[117px] md:ml-[169px]">Not a Member? Then</p>
                <button
                  className="w-[60px] mt-0 py-1 relative text-black rounded-full bg-white underline"
                  onClick={() => setView(view === "login" ? "signup" : "login")}
                >
                  {view === "login" ? "Sign Up!" : "LogIn!"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login1.propTypes = {
  setToken: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};
