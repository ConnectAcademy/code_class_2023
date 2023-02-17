import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import Student from "./pages/Student";
import Students from "./pages/Students";

const routes = createBrowserRouter([
  { path: "/", element: <Students /> },
  { path: "/add-student", element: <AddStudent /> },
  { path: "/students/:id", element: <Student /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
