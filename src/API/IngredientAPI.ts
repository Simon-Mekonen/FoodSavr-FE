import { AxiosMethod, IIngredient } from "./API.types";
import { api } from "./configs/axiosConfig";
import { testDataIngredients } from "../../testData";

export const fetchIngredients = async (): Promise<IIngredient[]> => {
  const response = await api("ingredients/", AxiosMethod.Get);
  if (response !== null) {
    return response.data;
  } else {
    console.warn("Using testdata due to response from server: Ingredients");
    return testDataIngredients;
  }
};
