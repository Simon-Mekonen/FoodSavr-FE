import { RecipeCard } from "../RecipeCard/recipeCard";
import { IRecipeCardListProps } from "./recipeCardList.types";
import { StyledBox } from "./recipeCardList.styles";

export const RecipeCardList: React.FC<IRecipeCardListProps> = ({
  recipeCardDataList,
  ingredientCount,
}) => {
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
