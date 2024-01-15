import * as React from "react";
import { Box } from "@mui/system";

export default function RecipeCard({ recipeCardData, key }) {
  return (
    <Box sx={boxSize} key={key} onClick={() => console.log(recipeCardData)}>
      {/* Add Cardomponent.js from old repo */}
    </Box>
  );
}

const boxSize = {
  width: "356px",
  mt: "20px",
  mx: "10px",
};
