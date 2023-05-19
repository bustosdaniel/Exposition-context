import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DataBase from "./baseDatos";
import Structure from "./structure";
import Cloud from "./cloud";
import Computing from "./computing";
import CiberSeguridad from "./ciberseguridad";
import BigData from "./bigData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/detail/db",
    element: <DataBase />
  },
  {
    path: "/detail/structure",
    element: <Structure />
  },
  {
    path: "/detail/cloud",
    element: <Cloud />
  },
  {
    path: "/detail/redes&computing",
    element: <Computing />
  },
  {
    path: "/detail/ciberseguridad",
    element: <CiberSeguridad />
  },
  {
    path: "/detail/big-data",
    element: <BigData />
  }
]);
