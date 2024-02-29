import { atom, selector, selectorFamily } from "recoil";
import { IIngredient, IRecipeBlob, IRecipeComplete } from "../API/API.types";
import { IRecipeIngredientComplete } from "../Pages/Recipe/recipe.types";
import { addIngredientReplacements } from "../utils/converterUtils";
import { getIngredients } from "../API/IngredientAPI";
import { getRecipeMatches } from "../API/RecipeAPI";

export const ingredientOptionsState = selector<IIngredient[]>({
  key: "ingredientOptionsState",
  get: async () => {
    return await getIngredients();
  },
});

export const ingredientSearchState = atom<IIngredient[]>({
  key: "ingredientSearchState",
  default: [] as IIngredient[],
});

export const ingredientIdState = selector<number[]>({
  key: "ingredientIdState",
  get: ({ get }) => {
    const ingredients = get(ingredientSearchState);
    const ids = ingredients.map((ingredient) => ingredient.id);
    return ids;
  },
});

export const recipeBlobListState = selectorFamily({
  key: "recipeBlobListState",
  get:
    ({ ingredientIDs }) =>
    async () => {
      const result = await getRecipeMatches(ingredientIDs);
      return result;
    },
});

export const recipeState = atom<IRecipeComplete>({
  key: "recipeState",
  default: {} as IRecipeComplete,
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
