import { atom, selector } from "recoil";
import { IIngredient, IRecipeBlob, IRecipeComplete } from "../API/API.types";
import { IRecipeIngredientComplete } from "../Pages/Recipe/recipe.types";
import { addIngredientReplacements } from "../utils/converterUtils";
import { fetchIngredients } from "../API/IngredientAPI";
import { fetchRecipe, fetchRecipeMatches } from "../API/RecipeAPI";

export const ingredientOptionsState = atom<IIngredient[]>({
  key: "ingredientOptions",
  default: await fetchIngredients(),
});

export const ingredientSearchState = atom<IIngredient[]>({
  key: "ingredientSearchState",
  default: [] as IIngredient[],
});

export const ingredientSearchIdsState = selector<number[]>({
  key: "ingredientSearchIdsState",
  get: ({ get }) => {
    const ingredients = get(ingredientSearchState);
    const ids = ingredients.map((ingredient) => ingredient.id);
    return ids;
  },
});

export const recipeBlobListState = selector<IRecipeBlob[]>({
  key: "recipeBlobListState",
  get: async ({ get }) => {
    const ids = get(ingredientSearchIdsState);
    const result = await fetchRecipeMatches(ids);
    return result;
  },
});

// Get the recipe

export const currentRecipeIDState = atom<number>({
  key: "CurrentRecipeID",
  default: 0,
});

export const recipeState = selector<IRecipeComplete>({
  key: "recipeStateQuery",
  get: async ({ get }) => {
    const ingredientIds = get(ingredientSearchIdsState);
    const recipeID = get(currentRecipeIDState);
    const result = await fetchRecipe(recipeID, ingredientIds);
    return result;
  },
});
// END: Get the recipe

export const completeIngredientState = selector<IRecipeIngredientComplete[]>({
  key: "completeIngredientState",
  get: ({ get }) => {
    const recipe: IRecipeComplete = get(recipeState);
    const ingredients = recipe.recipeIngredient;
    const converter = recipe.ingredientConverter;

    return addIngredientReplacements(ingredients, converter);
  },
});
