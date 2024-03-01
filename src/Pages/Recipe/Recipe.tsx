import { Box, Container } from "@mui/system";
import { RecipeInfo } from "../../components/RecipeInfo/recipeInfo";
import { Ingredients } from "../../components/Ingredient/ingredient";
import { Steps } from "../../components/Steps/steps";
import { baseTheme } from "../../styles/theme";
import { FsCloseButton } from "../../components/FsCloseBtn/fsCloseBtn.styles";
import { StyledRecipeBox, StyledRecipeHero, StyledH1 } from "./recipe.styles";
import { useRecoilValue } from "recoil";
import {
  completeIngredientState,
  ingredientSearchIdsState,
  recipeState,
} from "../../store/recoilStore";
import React from "react";

const Recipe: React.FC = () => {
  // create an url for this page, to share it
  const completeRecipe = useRecoilValue(recipeState);
  const ingredients = useRecoilValue(completeIngredientState);
  const inputIngredient = useRecoilValue(ingredientSearchIdsState);

  const recipe = completeRecipe.recipe;
  const steps = completeRecipe.recipeSteps;
  const ingredientMatches = completeRecipe.ingredientConverter.length;

  return (
    <StyledRecipeBox>
      <React.Suspense fallback={<div>Loading...</div>}>
        <StyledRecipeHero>
          <FsCloseButton
            onClickFunc={() => console.log("close button")} // TODO: Add accessibility label for closing the website
          />
          <title>{recipe.name}</title>
          <img width={"100%"} src={recipe.imgLink} alt={recipe.name} />
          {/* TODO: add "No image available" */}
        </StyledRecipeHero>
        <Container
          maxWidth="md"
          sx={{
            bgcolor: baseTheme.colors.white,
            pb: "40px",
            position: "relative",
            top: "-100px",
            border: "50px 50px 0 0",
          }}
        >
          <Box>
            <StyledH1>{recipe.name}</StyledH1>
            <RecipeInfo
              portions={recipe.portions}
              cookingTime={recipe.cookingTime}
              ingredientMatches={ingredientMatches}
              inputIngredient={inputIngredient.length}
            />
            <Ingredients ingredients={ingredients} />
            <Steps recipeSteps={steps} />
          </Box>
        </Container>
      </React.Suspense>
    </StyledRecipeBox>
  );
};

export default Recipe;
