import React, { createContext, useState } from "react";

export const MyContext = createContext({});

const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState("");

  const changeMyGlobalState = (input) => {
    setMyState(input);
  };

  let globalState = {
    nekojState: myState,
    nekojaSiGlobalFn: changeMyGlobalState,
  };
  return (
    <MyContext.Provider value={globalState}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
