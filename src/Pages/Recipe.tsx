import { Box, Container } from "@mui/system";
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
    <div id="recipe">
      <title>{recipe.name}</title>
      <img width={"100%"} src={recipe.imgLink} alt={recipe.name} />
      <Container
        className="Recipe-description"
        maxWidth="md"
        sx={{ bgcolor: "#ffffff", pb: "40px" }}
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
  );
};

export default Recipe;
