import { IRecipeBlob } from "../../API/API.types";

export interface IRecipeCardListProps {
  recipeCardDataList: IRecipeBlob[];
  ingredientCount: number;
}
