import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";
import { StyledH1 } from "../Recipe/recipe.styles";
import {
  ingredientIdState,
  ingredientOptionsState,
  ingredientSearchState,
  recipeBlobListState,
} from "../../store/recoilStore";

const Home = () => {
  const [inputIngredients] = useRecoilState(ingredientSearchState);
  const ingredientOptions = useRecoilValue(ingredientOptionsState);
  const recipeCardDataList = useRecoilValueLoadable(
    recipeBlobListState(ingredientIdState)
  );
  console.log(recipeCardDataList);
  return (
    <>
      <StyledH1>FoodSavr</StyledH1>
      <SearchBar ingredientOptions={ingredientOptions} />
      {recipeCardDataList.contents.length ? (
        <RecipeCardList
          recipeCardDataList={recipeCardDataList.contents}
          ingredientCount={inputIngredients.length}
        />
      ) : (
        <div />
      )}
    </>
  );
};

export default Home;
