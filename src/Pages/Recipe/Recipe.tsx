import { Box, Container } from "@mui/system";
import { testDataRecipe } from "../../../testData";
import { RecipeInfo } from "../../components/RecipeInfo/recipeInfo";
import { Ingredients } from "../../components/Ingredient/ingredient";
import { Steps } from "../../components/Steps/steps";
import { useEffect, useState } from "react";
import { addIngredientReplacements } from "../../utils/converterUtils";
import { IRecipeIngredientComplete, IRecipeProps } from "./recipe.types";
import { baseTheme } from "../../styles/theme";
import { FsCloseButton } from "../../components/FsCloseBtn/fsCloseBtn.styles";
import { StyledRecipeBox, StyledRecipeHero, StyledH1 } from "./recipe.styles";

const Recipe: React.FC<IRecipeProps> = ({
  recipe,
  recipeSteps,
  recipeIngredient,
  ingredientConverter,
}) => {
  const [recipeIngredients, setRecipeIngredients] = useState<
    IRecipeIngredientComplete[]
  >([]);
  // Temporary
  recipe = testDataRecipe.recipe;
  recipeSteps = testDataRecipe.recipeSteps;
  recipeIngredient = testDataRecipe.recipeIngredient;
  ingredientConverter = testDataRecipe.ingredientConverter;
  const inputIngredient = [1, 2, 3, 4, 5];

  useEffect(() => {
    const updatedRecipeIngredient = addIngredientReplacements(
      recipeIngredient,
      ingredientConverter
    );
    setRecipeIngredients(updatedRecipeIngredient);
  }, [recipeIngredient, ingredientConverter]);

  return (
    <StyledRecipeBox>
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
            ingredientMatches={ingredientConverter.length}
            inputIngredient={inputIngredient.length}
          />
          <Ingredients ingredients={recipeIngredients} />
          <Steps recipeSteps={recipeSteps} />
        </Box>
      </Container>
    </StyledRecipeBox>
  );
};

export default Recipe;
