import './App.css'
import { getIngredient, getIngredients } from './API/IngredientAPI'
import { getRecipe, getRecipeMatches } from './API/RecipeAPI';

function App() {

  const fetchIngredients = async () => {
    const ingredients = await getIngredients();
    console.log(ingredients);
  };

  const fetchIngredient = async (id: number) => {
    const ingredient = await getIngredient(id);
    console.log(ingredient);
  } 
  const fetchRecipeMatches = async (ids: number[]) => {
    const recipes = await getRecipeMatches(ids);
    console.log(recipes);
  }
  const fetchRecipe = async (id: number, ingredients: number[]) => {
    const recipe = await getRecipe(id, ingredients);
    console.log(recipe)
  }

  return (
    <>
      <h1>FoodSavr Testing API</h1>
      <div className="card">
        <button onClick={() => fetchIngredients()}>
          Ingredients
        </button>
        <button onClick={() => fetchIngredient(3)}>
          Ingredient
        </button>
        <button onClick={() => fetchRecipeMatches([1, 2, 3, 4, 26])}>
          RecipeMatches
        </button>
        <button onClick={() => fetchRecipe(2, [1, 2, 3, 4, 5, 6, 7])}>
          Recipe
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
