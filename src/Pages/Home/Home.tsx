import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";
import { StyledH1 } from "../Recipe/recipe.styles";

const Home = () => {
  return (
    <>
      <StyledH1>FoodSavr</StyledH1>
      <SearchBar />
      <RecipeCardList />
    </>
  );
};

export default Home;
