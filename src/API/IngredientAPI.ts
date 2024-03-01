import { AxiosMethod, IIngredient } from "./API.types";
import { api } from "./configs/axiosConfig";
import { testDataIngredients } from "../../testData";

export const fetchIngredients = async (): Promise<IIngredient[]> => {
  const response = await api("ingredients/", AxiosMethod.Get);
  if (!response.ok) {
    console.log("TESTDATA: testDataIngredients");
    return testDataIngredients;
  }
  return response;
};
