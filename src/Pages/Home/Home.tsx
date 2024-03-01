import { useRecoilState } from "recoil";
import { RecipeCardList } from "../../components/RecipeCardList/recipeCardList";
import { SearchBar } from "../../components/Searchbar/searchbar";
import { StyledH1 } from "../Recipe/recipe.styles";
import {
  ingredientOptionsState,
  ingredientSearchState,
} from "../../store/recoilStore";
import React from "react";

const Home = () => {
  const [ingredientOptions] = useRecoilState(ingredientOptionsState);
  const [inputIngredients] = useRecoilState(ingredientSearchState);

  return (
    <>
      <StyledH1>FoodSavr</StyledH1>
      <SearchBar ingredientOptions={ingredientOptions} />
      <React.Suspense fallback={<div>Loading...</div>}>
        {inputIngredients.length ? <RecipeCardList /> : <div />}
      </React.Suspense>
    </>
  );
};

export default Home;
