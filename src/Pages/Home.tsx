import RecipeCardList from "../components/home/recipeCardList";
import SearchBar from "../components/home/searchbar";

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
