import { AxiosMethod, IRecipeBlob, IRecipeComplete } from "./API.types";
import { api } from "./configs/axiosConfig";
import { testDataRecipe, testDataRecipeMatches } from "../../testData";

const recipeMatchesroute = "recipematches/";
const recipeRoute = "recipe/";

export const getRecipeMatches = async (
  ingredients: number[]
): Promise<IRecipeBlob[]> => {
  const response = await api(
    `${recipeMatchesroute}`,
    AxiosMethod.Post,
    ingredients
  );
  if (!response.ok) {
    console.log("TESTDATA");
    return testDataRecipeMatches;
  }
  return response;
};

export const getRecipe = async (
  recipeId: number,
  ingredients: number[]
): Promise<IRecipeComplete> => {
  const response = await api(
    `${recipeRoute}${recipeId}`,
    AxiosMethod.Post,
    ingredients
  );
  if (!response.ok) {
    console.log("TESTDATA");
    return testDataRecipe;
  }
  return response;
};