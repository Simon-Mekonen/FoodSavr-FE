// testDataRecipeMatches;

import { Box } from "@mui/system";
import { testDataIngredients, testDataRecipeMatches } from "../../../testData";
import RecipeCard from "./recipeCard";

const RecipeCardList = () => {
  const testData = testDataRecipeMatches;
  const ingredientCount = testDataIngredients.length;

  return (
    testData && (
      <Box sx={cardListBox}>
        {testData.map((card, key) => (
          <RecipeCard
            recipeCardData={card}
            ingredientCount={ingredientCount}
            key={key}
          />
        ))}
      </Box>
    )
  );
};

const cardListBox = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
};

export default RecipeCardList;
