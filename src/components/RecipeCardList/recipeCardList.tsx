import { RecipeCard } from "../RecipeCard/recipeCard";
import { StyledBox } from "./recipeCardList.styles";
import { useRecoilValue } from "recoil";
import {
  recipeBlobListState,
  ingredientSearchState,
} from "../../store/recoilStore";

export const RecipeCardList = () => {
  const recipeCardDataList = useRecoilValue(recipeBlobListState);
  const ingredientCount = useRecoilValue(ingredientSearchState).length;

  return (
    recipeCardDataList && (
      <StyledBox>
        {recipeCardDataList.map((card, key) => (
          <RecipeCard
            recipeCardData={card}
            ingredientCount={ingredientCount}
            key={key}
          />
        ))}
      </StyledBox>
    )
  );
};
