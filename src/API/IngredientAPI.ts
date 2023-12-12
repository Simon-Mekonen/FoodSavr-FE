import { AxiosMethod, IIngredient } from "./API.types";
import { api } from "./configs/axiosConfig";


export const getIngredients = async (): Promise<IIngredient[]> => {
  const response = await api('ingredients/', AxiosMethod.Get);
  return response
}

export const getIngredient = async (id: number): Promise<IIngredient> => {
  const response = await api('ingredient/' + id, AxiosMethod.Get);
  return response
}