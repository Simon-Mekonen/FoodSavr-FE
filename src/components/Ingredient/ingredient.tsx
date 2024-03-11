import { Box, Stack } from "@mui/system";
import { StyledH2 } from "../../styles/theme";
import { ReplacedIngredient, Ingredient } from "./ingredient.styles";
import { IRecipeIngredientComplete } from "../../API/API.types";

export const Ingredients = ({
  ingredients,
}: {
  ingredients: IRecipeIngredientComplete[];
}) => {
  return (
    <>
      <Box>
        <StyledH2>Ingredienser</StyledH2>
        <Stack
          direction="row"
          sx={{ flexWrap: "wrap", alignItems: "flex-start" }}
        >
          {ingredients.map(
            ({ quantity, originalIngredient, measurement, replacement }, key) =>
              replacement ? (
                <ReplacedIngredient
                  ingredientId={key}
                  quantity={quantity}
                  originalIngredient={originalIngredient}
                  measurement={measurement}
                  replacement={replacement}
                ></ReplacedIngredient>
              ) : (
                <Ingredient
                  ingredientId={key}
                  quantity={quantity}
                  originalIngredient={originalIngredient}
                  measurement={measurement}
                ></Ingredient>
              )
          )}
        </Stack>
      </Box>
    </>
  );
};
