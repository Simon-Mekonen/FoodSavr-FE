import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { IRecipeInfoProps } from "./recipeInfo.types";
import { RecipeStat } from "../RecipStats/recipeStats";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const RecipeInfo: React.FC<IRecipeInfoProps> = ({
  portions,
  cookingTime,
  ingredientMatches,
  inputIngredient,
}) => {
  return (
    <StyledRecipeBox>
      <Container maxWidth={"sm"} sx={{ textAlign: "center" }}>
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

//TODO: Check negative numbers!
export const StyledRecipeBox = styled(Box)({
  backgroundColor: baseTheme.colors.cyan,
  borderTop: `1px dotted ${baseTheme.colors.pink}`,
  borderBottom: `1px dotted ${baseTheme.colors.pink}`,
  marginLeft: "-22px",
  marginRight: "-22px",
});
