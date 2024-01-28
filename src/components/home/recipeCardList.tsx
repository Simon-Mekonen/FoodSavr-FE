import { Box, styled } from "@mui/system";
import { testDataIngredients, testDataRecipeMatches } from "../../../testData";
import { RecipeCard } from "./recipeCard";
import { IRecipeCardListProps } from "./home.types";

export const RecipeCardList: React.FC<IRecipeCardListProps> = ({
  recipeCardDataList,
  ingredientCount,
}) => {
  // Test data
  recipeCardDataList = testDataRecipeMatches;
  ingredientCount = testDataIngredients.length;

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

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
});
