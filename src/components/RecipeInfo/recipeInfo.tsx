import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { RecipeStat } from "../RecipStats/recipeStats";
import { StyledRecipeBox } from "./recipeInfo.styles";

export const RecipeInfo = ({
  portions,
  cookingTime,
  ingredientMatches,
  inputIngredient,
}: {
  portions: number;
  cookingTime: number;
  ingredientMatches: number;
  inputIngredient: number;
}) => {
  return (
    <StyledRecipeBox>
      <Container maxWidth={"sm"}>
        <Box display={"flex"}>
          <Grid container>
            <RecipeStat
              type={"Question"}
              value={portions}
              text={"PORT"}
              border={true}
            />

            <RecipeStat
              type={"Clock"}
              value={cookingTime}
              text={" MIN"}
              border={true}
            />

            <RecipeStat
              type={"Heart"}
              value={ingredientMatches + " / " + inputIngredient}
              text={"RÅVAROR"}
              border={true}
            />
          </Grid>
        </Box>
      </Container>
    </StyledRecipeBox>
  );
};
