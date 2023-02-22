import React, { useRef } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";

const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const fnamRef = useRef();
  const lnameRef = useRef();
  const handleSubmit = () => {
    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
      firstname: fnamRef.current.value,
      lastname: lnameRef.current.value,
    };
    api.post("/register", data).then((res) => {
      console.log(res);
      emailRef.current.value = "";
      passRef.current.value = "";
      fnamRef.current.value = "";
      lnameRef.current.value = "";
    });
  };
  return (
    <div className="registerForm">
      <div>
        <input placeholder="Email" type="email" ref={emailRef} />
      </div>
      <div>
        <input placeholder="Password" type="password" ref={passRef} />
      </div>
      <div>
        <input placeholder="First Name" type="text" ref={fnamRef} />
      </div>
      <div>
        <input placeholder="Last Name" type="text" ref={lnameRef} />
      </div>
      <button onClick={handleSubmit}>Register</button>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
