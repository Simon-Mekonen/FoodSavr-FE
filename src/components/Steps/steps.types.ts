import { IRecipeSteps } from "../../API/API.types";

export interface IRecipeStepsDoneProps extends IRecipeSteps {
  done?: boolean;
}

export interface IStepsProps {
  recipeSteps: IRecipeStepsDoneProps[];
}
