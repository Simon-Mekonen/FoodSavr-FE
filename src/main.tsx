import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/Error/Error";
import RecipePage from "./Pages/Recipe/Recipe";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/theme";
import Home from "./Pages/Home/Home";
import { DebugObserver } from "./store/debug";
// import HomeContainer from "./Pages/Home/HomeContainer";

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
    loader: async () => {
      console.log("LOADING");
    },
  },
  {
    path: "recipe/:recipeId/:ingredientIds",
    element: <RecipePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <DebugObserver />
      <GlobalStyle /> {/* Include GlobalStyle within React.StrictMode */}
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
