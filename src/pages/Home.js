import React, { useContext } from "react";

import { Context } from "../store/context";
import ReqAuth from "../components/ReqAuth";

const Home = () => {
  const { currentUser } = useContext(Context);
  console.log(currentUser);
  return <div>Home</div>;
};

export default ReqAuth(Home);
