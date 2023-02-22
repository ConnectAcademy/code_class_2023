import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  let rawUser = localStorage.getItem("user");
  console.log(rawUser);

  useEffect(() => {
    console.log("Here");
    if (rawUser) {
      console.log("Not here");
      let parsedUser = JSON.parse(rawUser);
      setCurrentUser(parsedUser);
    }
  }, [rawUser]);

  console.log(currentUser);

  const logIn = (user) => {
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <Context.Provider value={{ currentUser, logIn }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
