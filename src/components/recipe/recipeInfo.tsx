import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { IRecipeInfoProps } from "./recipe.types";
import { RecipeStat } from "../recipeStats";

export const RecipeInfo: React.FC<IRecipeInfoProps> = ({
  portions,
  cookingTime,
  ingredientMatches,
  inputIngredient,
}) => {
  return (
    <div className="Recipe-info">
      <Container maxWidth={"sm"} sx={{ textAlign: "center" }}>
        <Box className="Recipe-info-box" display={"flex"}>
          <RecipeStat
            type={"Question"}
            text={portions + " PORT"}
            border={true}
          />

          <RecipeStat
            type={"Clock"}
            text={cookingTime + " MIN"}
            border={true}
          />

          <RecipeStat
            type={"Heart"}
            text={ingredientMatches + "/" + inputIngredient + " RÅVAROR"}
            border={true}
          />
        </Box>
      </Container>
    </div>
  );
};
