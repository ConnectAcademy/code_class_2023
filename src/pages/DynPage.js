import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router";

const DynPage = () => {
  const location = useLocation();
  const params = useParams();
  const nav = useNavigate();
  useEffect(() => {
    if (params.id === "mirsat") {
      nav("/", { state: "Braos!" });
    }
  });
  console.log(location, params);
  return <div>{params.id}</div>;
};

export default DynPage;
