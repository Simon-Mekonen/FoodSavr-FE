import * as React from "react";
import { Box } from "@mui/system";
import { IRecipeComplete } from "../API/API.types";

interface RecipeCardProps {
  recipeCardData: IRecipeComplete;
  key: string | number;
}
const RecipeCard: React.FC<RecipeCardProps> = ({ recipeCardData, key }) => {
  return (
    <Box sx={boxSize} key={key} onClick={() => console.log(recipeCardData)}>
      {/* Add Cardomponent.js from old repo */}
    </Box>
  );
};

const boxSize = {
  width: "356px",
  mt: "20px",
  mx: "10px",
};

export default RecipeCard;
