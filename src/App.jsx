import React, { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = function () {
    setIsLoggedIn(true);
  };

  const logOutHandler = function () {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Body logedIn={isLoggedIn} logOut={logOutHandler} />}
          />

          <Route path="/login" element={<Login login={loginHandler} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
