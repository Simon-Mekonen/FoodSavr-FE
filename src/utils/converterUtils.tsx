import { IIngredientConverter, IRecipeIngredient } from "../API/API.types";
import { IRecipeIngredientComplete } from "../pages/Recipe.types";

export const addIngredientReplacements = (
  ingredients: IRecipeIngredient[],
  converter: IIngredientConverter[]
): IRecipeIngredientComplete[] => {
  const updatedIngredients: IRecipeIngredientComplete[] = [...ingredients];
  // Loop through each conversion in the converter array
  converter.forEach((conv) => {
    // Loop through each ingredient in the ingredients array
    updatedIngredients.forEach((ingr) => {
      // Check if the original ingredient in the conversion matches the current ingredient
      // and if there is a replacement specified in the conversion
      if (
        conv.originalIngredient?.toLocaleLowerCase() ===
          ingr.originalIngredient?.toLocaleLowerCase() &&
        conv.replacementIngredient?.toLocaleLowerCase()
      ) {
        // Update the current ingredient's replacement with the one specified in the conversion
        ingr.replacement = conv.replacementIngredient;
      }
    });
  });
  return updatedIngredients;
};
