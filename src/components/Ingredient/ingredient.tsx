import { Box, Stack } from "@mui/system";
import { IngredientProps } from "./ingredient.types";
import { StyledH3 } from "../../styles/theme";
import { ReplacedIngredient, Ingredient } from "./ingredient.styles";

export const Ingredients: React.FC<IngredientProps> = ({ ingredients }) => {
  return (
    <>
      <Box>
        <StyledH3>Ingredienser</StyledH3>
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
