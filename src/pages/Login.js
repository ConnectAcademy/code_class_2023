import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MyContext } from "../store/context";
import Input from "../components/Input";
import Header from "../components/Header";

const Login = () => {
  const nav = useNavigate();
  const { handleLogin } = useContext(MyContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = () => {
    handleLogin({ userName, password });
    nav("/");
  };

  return (
    <>
      <Header />
      <div className="formContainer">
        <Input
          name="username"
          label="Username"
          value={userName}
          setValue={setUserName}
        />
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <button type="button" onClick={() => setShowPassword((pred) => !pred)}>
          {showPassword ? "Hide" : "Show"} password
        </button>
        <button onClick={loginUser}>Log In</button>
      </div>
    </>
  );
};

export default Login;
