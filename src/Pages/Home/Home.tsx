import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";

const Home = () => {
  return (
    <>
      <h1>FoodSavr</h1>
      <SearchBar />
      <RecipeCardList />
    </>
  );
};

export default Home;
