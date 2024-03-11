import { AxiosMethod, IRecipeBlob, IRecipeComplete } from "./API.types";
import { api } from "./configs/axiosConfig";
import { testDataRecipe, testDataRecipeMatches } from "../../testData";

const recipeMatchesroute = "recipematches/";
const recipeRoute = "recipe/";

export const fetchRecipeMatches = async (
  ingredients: number[]
): Promise<IRecipeBlob[]> => {
  const response = await api(
    `${recipeMatchesroute}`,
    AxiosMethod.Post,
    ingredients
  );
  if (response !== null) {
    return response;
  } else {
    console.warn(
      "Using testdata due to response from server: Recipe Card/Matches"
    );
    return testDataRecipeMatches;
  }
};

export const fetchRecipe = async (
  recipeId: number,
  ingredients: number[]
): Promise<IRecipeComplete> => {
  const response = await api(
    `${recipeRoute}${recipeId}`,
    AxiosMethod.Post,
    ingredients
  );
  if (response !== null) {
    return response;
  } else {
    console.warn("Using testdata due to response from server: Recipe");
    return testDataRecipe;
  }
};
