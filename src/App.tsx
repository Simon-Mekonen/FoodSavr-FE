import "./App.css";
import { getIngredients } from "./API/IngredientAPI";
import { getRecipe, getRecipeMatches } from "./API/RecipeAPI";
import RecipeCard from "./components/home/recipeCard";
import { useState } from "react";
import { IRecipeComplete } from "./API/API.types";

// this is not in use at the moment

function App() {
  const [recipe, setRecipe] = useState<IRecipeComplete>();
  const fetchIngredients = async () => {
    const ingredients = await getIngredients();
    console.log(ingredients);
  };

  const fetchRecipeMatches = async (ids: number[]) => {
    const recipes = await getRecipeMatches(ids);
    console.log(recipes);
  };
  const fetchRecipe = async (id: number, ingredients: number[]) => {
    const results = await getRecipe(id, ingredients);
    setRecipe(results);
    console.log(recipe);
  };

  return (
    <>
      <h1>FoodSavr</h1>
      <div className="card">
        <button onClick={() => fetchIngredients()}>Ingredients</button>
        <button onClick={() => fetchRecipeMatches([1, 2, 3, 4, 26])}>
          RecipeMatches
        </button>
        <button onClick={() => fetchRecipe(2, [1, 2, 3, 4, 5, 6, 7])}>
          Recipe
          {recipe && (
            <RecipeCard key={recipe?.recipe.id} recipeCardData={recipe} />
          )}
        </button>
      </div>
    </>
  );
}

export default App;
