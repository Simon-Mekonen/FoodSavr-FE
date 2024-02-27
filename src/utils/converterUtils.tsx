import { IIngredientConverter, IRecipeIngredient } from "../API/API.types";
import { IRecipeIngredientComplete } from "../Pages/Recipe/recipe.types";

export const addIngredientReplacements = (
  ingredients: IRecipeIngredient[],
  converter: IIngredientConverter[]
): IRecipeIngredientComplete[] => {
  const updatedIngredients: IRecipeIngredientComplete[] = [...ingredients];
  // Loop through each conversion in the converter array
  converter.forEach((converterItem) => {
    // Loop through each ingredient in the ingredients array
    updatedIngredients.forEach((ingredientItem) => {
      // Check if the original ingredient in the conversion matches the current ingredient
      // and if there is a replacement specified in the conversion
      if (
        converterItem.originalIngredient?.toLocaleLowerCase() ===
          ingredientItem.originalIngredient?.toLocaleLowerCase() &&
        converterItem.replacementIngredient?.toLocaleLowerCase()
      ) {
        // Update the current ingredient's replacement with the one specified in the conversion
        ingredientItem.replacement = converterItem.replacementIngredient;
      }
    });
  });
  return updatedIngredients;
};
