import React from "react";
import Heading from "../components/alpha-heading/Heading";
import Text from "../components/alpha-text/Text";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="login-header">
        <Heading text="Welcome"></Heading>
        <div className="form">
          <input className="login-input" type="text" />
          <input className="login-input" type="text" />
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="login-btn"
          >
            Login
          </button>
          <Text text="Dont have an account? Sign up HERE"></Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
