import { Box, Container } from "@mui/system";
import { styled } from "@mui/material";
import { testDataRecipe } from "../../testData";
import { RecipeInfo } from "../components/recipe/recipeInfo";
import { Ingredients } from "../components/recipe/ingredient";
import { Steps } from "../components/recipe/steps";
import {
  IIngredientConverter,
  IRecipe,
  IRecipeIngredient,
  IRecipeSteps,
} from "../API/API.types";
import { useEffect, useState } from "react";
import { addIngredientReplacements } from "../utils/converterUtils";
import { IRecipeIngredientComplete } from "./Recipe.types";
import { FaRegTimesCircle } from "react-icons/fa";

interface IRecipeProps {
  recipe: IRecipe;
  recipeSteps: IRecipeSteps[];
  recipeIngredient: IRecipeIngredient[];
  ingredientConverter: IIngredientConverter[];
}

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
    <div className="Recipe">
      <div className="Animation-slideup">
        <div className="Recipe-hero">
          <StyledCloseButton
            // TODO: Add accessibility label for closing the website
            // className="Icon-recipe-close"
            onClick={() => console.log("closing module")} //TODO: Add function to go back to previous page
          />
          <title>{recipe.name}</title>
          <img width={"100%"} src={recipe.imgLink} alt={recipe.name} />
          {/* TODO: add "No image available" */}
        </div>
        <Container
          // className="Recipe-description"
          maxWidth="md"
          sx={{
            bgcolor: "#ffffff",
            pb: "40px",
            position: "relative",
            top: "-100px",
            border: "50px 50px 0 0",
          }}
        >
          <Box>
            <h1 className="Recipe-title">{recipe.name}</h1>
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
      </div>
    </div>
  );
};

const StyledCloseButton = styled(FaRegTimesCircle)({
  position: "absolute",
  right: "20px",
  top: "20px",
  fontSize: "30px",
  cursor: "pointer",
  transition: "transform 0.15s ease-in",
  color: "#fff",
  borderRadius: "30px",
});
export default Recipe;
