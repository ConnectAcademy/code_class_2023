import React from "react";
import Form from "./components/Form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCar from "./pages/AddCar";
import Cars from "./pages/Cars";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cars />,
    },
    {
      path: "/add-car",
      element: <AddCar />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
