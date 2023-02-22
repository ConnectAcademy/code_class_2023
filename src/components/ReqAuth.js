import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";

const ReqAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { currentUser } = useContext(Context);
    const nav = useNavigate();
    useEffect(() => {
      if (!currentUser) {
        nav("/login");
      }
    }, [currentUser]);
    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};

export default ReqAuth;
