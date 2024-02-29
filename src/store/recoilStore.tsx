import { atom, selector } from "recoil";
import { testDataIngredients, testDataRecipeMatches } from "../../testData";
import { IIngredient, IRecipeBlob, IRecipeComplete } from "../API/API.types";
import { IRecipeIngredientComplete } from "../Pages/Recipe/recipe.types";
import { addIngredientReplacements } from "../utils/converterUtils";

export const ingredientOptionsState = atom<IIngredient[]>({
  key: "ingredientOptionsState",
  default: testDataIngredients as IIngredient[],
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

export const recipeBlobListState = atom<IRecipeBlob[]>({
  key: "recipeBlobListState",
  default: testDataRecipeMatches,
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
