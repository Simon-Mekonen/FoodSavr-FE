import { Box, Container } from "@mui/system";
import { RecipeInfo } from "../../components/RecipeInfo/recipeInfo";
import { Ingredients } from "../../components/Ingredient/ingredient";
import { Steps } from "../../components/Steps/steps";
import { baseTheme } from "../../styles/theme";
import { FsCloseButton } from "../../components/FsCloseBtn/fsCloseBtn.styles";
import { StyledRecipeBox, StyledRecipeHero, StyledH1 } from "./recipe.styles";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRecipe } from "../../API/RecipeAPI";
import { IRecipeComplete } from "../../API/API.types";
import {
  addIngredientReplacements,
  convertStringToNumArray,
} from "../../utils/converterUtils";

const Recipe: React.FC = () => {
  const { recipeId, ingredientIds } = useParams();
  const [inputIngredientLength, setInputIngredientLength] = useState<number>(0);
  const [completeRecipe, setCompleteRecipe] = useState<IRecipeComplete | null>(
    null
  );

  const navigation = useNavigate();

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId, ingredientIds]);

  const getRecipe = async () => {
    if (recipeId && ingredientIds) {
      const tempRecipeId = Number(recipeId);
      const tempIngredientIds = convertStringToNumArray(ingredientIds);

      const result = await fetchRecipe(tempRecipeId, tempIngredientIds);
      result.recipeIngredient = addIngredientReplacements(
        result.recipeIngredient,
        result.ingredientConverter
      );
      setInputIngredientLength(tempIngredientIds.length);
      setCompleteRecipe(result);
    }
  };

  const closeRecipe = () => {
    navigation("/");
  };

  return (
    <>
      {completeRecipe && (
        <StyledRecipeBox>
          <StyledRecipeHero>
            <FsCloseButton
              onClickFunc={() => closeRecipe()} // TODO: Add accessibility label for closing the website
            />
            <title>{completeRecipe.recipe.name}</title>
            <img
              width={"100%"}
              src={completeRecipe.recipe.imgLink}
              alt={completeRecipe.recipe.name}
            />
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
              <StyledH1>{completeRecipe.recipe.name}</StyledH1>
              <RecipeInfo
                portions={completeRecipe.recipe.portions}
                cookingTime={completeRecipe.recipe.cookingTime}
                ingredientMatches={completeRecipe.ingredientConverter.length}
                inputIngredient={inputIngredientLength}
              />
              <Ingredients ingredients={completeRecipe.recipeIngredient} />
              <Steps recipeSteps={completeRecipe.recipeSteps} />
            </Box>
          </Container>
        </StyledRecipeBox>
      )}
    </>
  );
};

export default Recipe;
