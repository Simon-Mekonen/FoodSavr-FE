import { AxiosMethod, IRecipeBlob } from "./API.types";
import { api } from "./configs/axiosConfig";

const route = 'recipematches/'

export const getRecipeMatches = async (ingredients: number[]): Promise<IRecipeBlob[]> => {
  const response = await api(`${route}`, AxiosMethod.Post, ingredients)
  return response;
}