import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/Error/Error";
import RecipePage from "./Pages/Recipe/Recipe";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/theme";
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recipe",
    element: <RecipePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle /> {/* Include GlobalStyle within React.StrictMode */}
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
