import React, { useContext } from "react";
import { MyContext } from "../store/context";

import ReqAuth from "../HOC/ReqAuth";
import Header from "../components/Header";

const Home = () => {
  const { user } = useContext(MyContext);
  console.log(user);
  return (
    <div>
      <Header />
      <h1>Hello {user?.userName}!</h1>
    </div>
  );
};

export default ReqAuth(Home);
