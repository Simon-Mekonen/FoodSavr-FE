import { useRecoilState, useRecoilValue } from "recoil";
import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";
import { StyledH1 } from "../Recipe/recipe.styles";
import {
  ingredientOptionsState,
  ingredientSearchState,
  recipeBlobListState,
} from "../../store/recoilStore";

const Home = () => {
  const [recipeCardDataList] = useRecoilState(recipeBlobListState);
  const [inputIngredients] = useRecoilState(ingredientSearchState);
  const ingredientOptions = useRecoilValue(ingredientOptionsState);

  return (
    <>
      <StyledH1>FoodSavr</StyledH1>
      <SearchBar ingredientOptions={ingredientOptions} />
      <RecipeCardList
        recipeCardDataList={recipeCardDataList}
        ingredientCount={inputIngredients.length}
      />
    </>
  );
};

export default Home;
