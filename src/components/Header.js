import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MyContext } from "../store/context";

const Header = () => {
  const { user, handleLogout } = useContext(MyContext);

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login" onClick={handleLogout}>
          Log {user ? "out" : "in"}
        </Link>
      </li>
    </ul>
  );
};

export default Header;
