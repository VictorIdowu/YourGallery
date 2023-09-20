import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//  Redirect to Login Page onLoad
const ConditionalRedirect = ({ condition, to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) {
      navigate(to);
    }
  }, []);

  return null;
};

export default ConditionalRedirect;
