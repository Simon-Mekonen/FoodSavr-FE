import { atom, selector } from "recoil";
import { IIngredient, IRecipeBlob, IRecipeComplete } from "../API/API.types";
import { IRecipeIngredientComplete } from "../Pages/Recipe/recipe.types";
import { addIngredientReplacements } from "../utils/converterUtils";
import { fetchIngredients } from "../API/IngredientAPI";
import { fetchRecipeMatches } from "../API/RecipeAPI";
import { testDataRecipe2 } from "../../testData";

export const ingredientOptionsState = atom<IIngredient[]>({
  key: "ingredientOptionsState",
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

export const recipeState = atom<IRecipeComplete>({
  key: "recipeState",
  default: testDataRecipe2,
  // default: await fetchRecipe(2, [1, 2, 3, 4]),
  // effects: [local],
});

export const completeIngredientState = selector<IRecipeIngredientComplete[]>({
  key: "completeIngredientState",
  get: ({ get }) => {
    const recipe = get(recipeState);
    const ingredients = recipe.recipeIngredient;
    const converter = recipe.ingredientConverter;

    return addIngredientReplacements(ingredients, converter);
  },
});
