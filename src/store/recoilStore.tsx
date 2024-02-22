import { atom, selector } from "recoil";
import { testDataIngredients } from "../../testData";
import { IIngredient } from "../API/API.types";

export const ingredientOptionsState = atom<IIngredient[]>({
  key: "ingredientOptionsState",
  default: testDataIngredients as IIngredient[],
});

export const ingredientState = atom<IIngredient[]>({
  key: "ingredientState",
  default: [] as IIngredient[],
});

export const ingredientIdState = selector<number[]>({
  key: "ingredientIdsState",
  get: ({ get }) => {
    const ingredients = get(ingredientState);
    const ids = ingredients.map((ingredient) => ingredient.id);
    return ids;
  },
});
