import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about/contact">Contact Us</Link>
    </div>
  );
};

export default About;
