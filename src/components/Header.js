import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/context";

const Header = ({ children }) => {
  const { logOut } = useContext(Context);
  return (
    <div>
      <div className="headerList">
        <div className="menu">
          <Link className="li" to="/">
            Home
          </Link>
          <Link className="li" to="/profile">
            Profile
          </Link>
        </div>
        <Link className="li" to="/login" onClick={logOut}>
          Log Out
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
