import {
  IIngredientConverter,
  IRecipe,
  IRecipeIngredient,
  IRecipeSteps,
} from "../../API/API.types";

export interface IRecipeIngredientComplete extends IRecipeIngredient {
  replacement?: string | undefined;
}

export interface IRecipeProps {
  recipe: IRecipe;
  recipeSteps: IRecipeSteps[];
  recipeIngredient: IRecipeIngredient[];
  ingredientConverter: IIngredientConverter[];
}
