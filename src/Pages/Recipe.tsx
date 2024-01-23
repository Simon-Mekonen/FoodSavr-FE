import { Box, Container } from "@mui/system";
import { testDataRecipe } from "../../testData";
import { RecipeInfo } from "../components/recipe/recipeInfo";
import { Ingredients } from "../components/recipe/ingredient";
import { Steps } from "../components/recipe/steps";

const Recipe = () => {
  const { recipe, recipeSteps, recipeIngredient, ingredientConverter } =
    testDataRecipe;

  const inputIngredient = [1, 2, 3, 4, 5];
  // Converting the ingredients is needed

  return (
    <div id="recipe">
      <title>{recipe.name}</title>
      <Container
        className="Recipe-description"
        maxWidth="md"
        sx={{ bgcolor: "#ffffff", pb: "40px" }}
      >
        <Box>
          <h1>{recipe.name}</h1>
          <RecipeInfo
            recipe={recipe}
            converter={ingredientConverter}
            inputIngredient={inputIngredient}
          />
          <Ingredients
            ingredients={recipeIngredient}
            converter={ingredientConverter}
          />
          <Steps steps={recipeSteps} />
        </Box>
      </Container>
      <img width={"100%"} src={recipe.imgLink} alt={recipe.name} />
    </div>
  );
};

export default Recipe;
