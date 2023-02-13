import React from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const navigation = useLocation();
  console.log(navigation.state);
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/about/contact">Contact Us</Link>
    </div>
  );
};

export default Home;
