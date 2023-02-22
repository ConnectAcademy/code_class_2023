import React, { useRef, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../api/axios";
import { Context } from "../store/context";

const Login = () => {
  const { logIn, currentUser } = useContext(Context);
  const nav = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    if (currentUser) {
      nav("/");
    }
  }, [currentUser]);

  const handleLogin = () => {
    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    api.post("/login", data).then((res) => {
      logIn(res.data);
      nav("/");
    });
  };
  return (
    <div className="loginForm">
      <div>
        <input placeholder="Email" type="email" ref={emailRef} />
      </div>

      <div>
        <input placeholder="Password" type="password" ref={passRef} />
      </div>
      <button onClick={handleLogin}>Log in</button>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
