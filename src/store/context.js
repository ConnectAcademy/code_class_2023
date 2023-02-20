import React, { createContext, useState } from "react";

export const MyContext = createContext({});

const MyContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logIn = (user) => {
    setCurrentUser(user);
  };

  const logOut = () => setCurrentUser(null);

  return (
    <MyContext.Provider
      value={{ user: currentUser, handleLogin: logIn, handleLogout: logOut }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
