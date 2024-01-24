import { IRecipeIngredient } from "../API/API.types";

export interface IRecipeIngredientComplete extends IRecipeIngredient {
  replacement?: string | undefined;
}
