import React, { useContext } from "react";
import DrugaKomponenta from "./DrugaKomponenta";
import { MyContext } from "./store/context";

function App() {
  const { nekojaSiGlobalFn } = useContext(MyContext);
  return (
    <div>
      <DrugaKomponenta />
      <h1>Hello World!</h1>
      <button onClick={() => nekojaSiGlobalFn("stavi go ova za global state")}>
        Smeni global state
      </button>
    </div>
  );
}

export default App;
