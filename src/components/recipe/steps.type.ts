import { IRecipeSteps } from "../../API/API.types";

export interface IRecipeStepsDone extends IRecipeSteps {
  done?: boolean;
}
