import React from "react";
import Heading from "../components/alpha-heading/Heading";
import Text from "../components/alpha-text/Text";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setEmail, addPassword } from "../actions/actions";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handle(e) {
    const newvalues = { ...values };
    newvalues[e.target.id] = e.target.value;
    setValues(newvalues);
    console.log(newvalues);
  }
  dispatch(setEmail(values.email));
  dispatch(addPassword(values.password));

  const SignUp = async () => {
    try {
      const resp = await axios.post("http://localhost:5000/api/user", {
        email: values.email,
        password: values.password,
      });
      console.log(resp.data);
      navigate("/home");
    } catch (err) {}
  };

  return (
    <div>
      <div className="login-header">
        <Heading text="Welcome"></Heading>
        <div className="form">
          <label>
            <p className="label">Email</p>
            <input
              className="login-input"
              type="text"
              name="email"
              onChange={(e) => handle(e)}
              id="email"
            />
          </label>
          <label>
            <p className="label">Password</p>
            <input
              className="login-input"
              type="text"
              name="password"
              onChange={(e) => handle(e)}
              id="password"
            />
          </label>
          <input
            className="login-btn"
            type="submit"
            value="Log in"
            onClick={SignUp}
          />
          <Text text="Dont have an account? Sign up HERE"></Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
