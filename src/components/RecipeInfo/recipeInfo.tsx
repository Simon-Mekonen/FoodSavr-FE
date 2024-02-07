import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { IRecipeInfoProps } from "./recipeInfo.types";
import { RecipeStat } from "../RecipStats/recipeStats";
import { StyledRecipeBox } from "./recipeInfo.Styles";

export const RecipeInfo: React.FC<IRecipeInfoProps> = ({
  portions,
  cookingTime,
  ingredientMatches,
  inputIngredient,
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
