import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/Error";
import RecipePage from "./Pages/Recipe";
import HomePage from "./Pages/Home";
import { IRecipe } from "./API/API.types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recipe",
    element: (
      <RecipePage
        recipe={{} as IRecipe}
        recipeSteps={[]}
        recipeIngredient={[]}
        ingredientConverter={[]}
      />
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
