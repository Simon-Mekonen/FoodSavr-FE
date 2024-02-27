import { useRecoilState } from "recoil";
import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";
import { StyledH1 } from "../Recipe/recipe.styles";
import {
  ingredientState,
  recipeCardDataListState,
} from "../../store/recoilStore";

const Home = () => {
  const [recipeCardDataList] = useRecoilState(recipeCardDataListState);
  const [inputIngredients] = useRecoilState(ingredientState);
  return (
    <>
      <StyledH1>FoodSavr</StyledH1>
      <SearchBar />
      <RecipeCardList
        recipeCardDataList={recipeCardDataList}
        ingredientCount={inputIngredients.length}
      />
    </>
  );
};

export default Home;
