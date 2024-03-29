import {
  IIngredientConverter,
  IRecipeIngredient,
  IRecipeIngredientComplete,
} from "../API/API.types";

export const addIngredientReplacements = (
  ingredients: IRecipeIngredient[],
  converter: IIngredientConverter[]
): IRecipeIngredientComplete[] => {
  try {
    const updatedIngredients: IRecipeIngredientComplete[] = ingredients.map(
      (ingredient) => ({
        ...ingredient,
      })
    );

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
  } catch (error) {
    console.error("Error at appending replacements: ", error);
    return ingredients;
  }
};

export const convertStringToNumArray = (input: string): number[] => {
  const arraySeparator = ",";
  if (input.includes(arraySeparator)) {
    return input.split(",").map((id) => Number(id));
  } else {
    return [];
  }
};
