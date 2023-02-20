import React from "react";
import ReactDOM from "react-dom/client";
import MyContextProvider from "./store/context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
