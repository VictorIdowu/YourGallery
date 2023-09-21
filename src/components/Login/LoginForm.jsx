import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Icon } from "@iconify/react";

import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  //  Close PopUp Function
  const closePopUp = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 1500);
  };

  //  Submit Function
  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      setButtonLoader(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setMessage("Login Successful");
      setButtonLoader(false);
      setPopUp(true);
      closePopUp();
      setTimeout(() => {
        navigate("/");
        props.login();
      }, 100);
    } catch (err) {
      setMessage("Incorrect email or password");

      setButtonLoader(false);
      setPopUp(true);
      setPassword("");
      closePopUp();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 md:gap-12 items-center backdrop-blur-2xl backdrop-hue-rotate-180 backdrop-saturate-200 z-40 px-5 py-8 w-64 sm:w-1/2 lg:w-5/12 rounded-xl"
    >
      <h3 className="flex items-center justify-between text-secondary-100 font-semibold text-sm sm:text-lg md:text-xl w-full">
        Welcome Back
        <span className="uppercase font-black text-base sm:text-xl md:text-2xl">
          Log In
        </span>
      </h3>
      <label htmlFor="email" className="label">
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="user@example.com"
        />
      </label>
      <label htmlFor="password" className="label">
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="•••••••••"
        />
      </label>
      <aside className="w-full transition-all duration-300">
        {!buttonLoader && (
          <button className="bg-secondary-100 hover:bg-secondary-200 text-center text-primary-300 w-full rounded-md py-2 sm:py-3 md:py-6 text-sm sm:text-lg md:text-xl transition-colors duration-500">
            Log In
          </button>
        )}
        {buttonLoader && (
          <button className="bg-secondary-200 text-center text-primary-300 w-full rounded-md py-2 sm:py-3 md:py-6 text-lg sm:text-xl md:text-2xl ">
            <Icon
              icon="mingcute:loading-line"
              className="w-full animate-spin"
            />
          </button>
        )}
      </aside>
      {popUp && <PopUp msg={message} />}
    </form>
  );
};

export default LoginForm;
