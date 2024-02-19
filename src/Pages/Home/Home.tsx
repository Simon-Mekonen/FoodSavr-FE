import { testDataIngredients, testDataRecipeMatches } from "../../../testData";
import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";
import { StyledH1 } from "../Recipe/recipe.styles";

const Home = () => {
  // Test data
  const recipeCardDataList = testDataRecipeMatches;
  const ingredientCount = testDataIngredients.length;

  return (
    <>
      <StyledH1>FoodSavr</StyledH1>
      <SearchBar />
      <RecipeCardList
        recipeCardDataList={recipeCardDataList}
        ingredientCount={ingredientCount}
      />
    </>
  );
};

export default Home;
