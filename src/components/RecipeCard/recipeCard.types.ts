import { IRecipeBlob } from "../../API/API.types";

export interface IRecipeCardProps {
  recipeCardData: IRecipeBlob;
  ingredientCount: number;
  key: string | number;
}
