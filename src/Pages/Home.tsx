import RecipeCardList from "../components/recipeCardList";
import SearchBar from "../components/searchbar";

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
