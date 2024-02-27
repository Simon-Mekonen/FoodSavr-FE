import { Box, Container } from "@mui/system";
import { RecipeInfo } from "../../components/RecipeInfo/recipeInfo";
import { Ingredients } from "../../components/Ingredient/ingredient";
import { Steps } from "../../components/Steps/steps";
import { baseTheme } from "../../styles/theme";
import { FsCloseButton } from "../../components/FsCloseBtn/fsCloseBtn.styles";
import { StyledRecipeBox, StyledRecipeHero, StyledH1 } from "./recipe.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  completeIngredientState,
  ingredientIdState,
  recipeState,
} from "../../store/recoilStore";

const Recipe: React.FC = () => {
  const recipeIngredients = useRecoilValue(completeIngredientState);
  const [completeRecipe] = useRecoilState(recipeState);
  let inputIngredient = useRecoilValue(ingredientIdState);

  // temporary set of values!
  inputIngredient = inputIngredient.length ? inputIngredient : [1, 2, 3, 4, 5];

  const recipe = completeRecipe.recipe; //TODO: Save to state and not here
  const recipeSteps = completeRecipe.recipeSteps; //TODO: Save to state and not here
  const recipeIngredient = completeRecipe.recipeIngredient; //TODO: Save to state and not here
  const ingredientConverter = completeRecipe.ingredientConverter; //TODO: Save to state and not here

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
