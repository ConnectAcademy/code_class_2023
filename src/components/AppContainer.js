import React from "react";
import { useLocation, Link } from "react-router-dom";

const AppContainer = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="appContainer">
      <ul>
        <Link
          to="/"
          className="link"
          style={{
            textDecoration: pathname === "/" ? "underline" : "none",
          }}
        >
          Cars
        </Link>
        <Link
          to="/add-car"
          className="link"
          style={{
            textDecoration: pathname === "/add-car" ? "underline" : "none",
          }}
        >
          Add
        </Link>
      </ul>
      {children}
    </div>
  );
};

export default AppContainer;
