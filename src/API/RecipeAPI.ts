import { AxiosMethod, IRecipeBlob, IRecipeComplete } from "./API.types";
import { api } from "./configs/axiosConfig";

const recipeMatchesroute = 'recipematches/'
const recipeRoute = 'recipe/'

export const getRecipeMatches = async (ingredients: number[]): Promise<IRecipeBlob[]> => {
  const response = await api(`${recipeMatchesroute}`, AxiosMethod.Post, ingredients)
  return response;
}

export const getRecipe = async (recipeId: number, ingredients: number[]): Promise<IRecipeComplete> => {
  const response = await api(`${recipeRoute}${recipeId}`, AxiosMethod.Post, ingredients);
  return response;

}
