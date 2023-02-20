import React, { useContext } from "react";
import { MyContext } from "./store/context";

const DrugaKomponenta = () => {
  const { nekojState } = useContext(MyContext);
  console.log("Ova e od druga komponenta: ", nekojState);
  return <div>DrugaKomponenta</div>;
};

export default DrugaKomponenta;
