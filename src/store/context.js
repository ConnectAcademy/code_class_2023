import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  let rawUser = localStorage.getItem("user");

  useEffect(() => {
    if (rawUser) {
      let parsedUser = JSON.parse(rawUser);
      setCurrentUser(parsedUser);
    }
  }, [rawUser]);

  const logIn = (user) => {
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };
  return (
    <Context.Provider value={{ currentUser, logIn, logOut }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
