import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../store/context";

const ReqAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const nav = useNavigate();
    const { user } = useContext(MyContext);
    useEffect(() => {
      if (!user) {
        nav("/login");
      }
    }, [user]);
    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};

export default ReqAuth;
