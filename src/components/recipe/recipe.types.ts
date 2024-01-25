import { IRecipeSteps } from "../../API/API.types";
import { IRecipeIngredientComplete } from "../../pages/Recipe.types";

export interface IRecipeStepsDoneProps extends IRecipeSteps {
  done?: boolean;
}

export interface IngredientProps {
  ingredients: IRecipeIngredientComplete[];
}

export interface IStepsProps {
  recipeSteps: IRecipeStepsDoneProps[];
}

export interface IRecipeInfoProps {
  portions: number;
  cookingTime: number;
  ingredientMatches: number;
  inputIngredient: number;
}
