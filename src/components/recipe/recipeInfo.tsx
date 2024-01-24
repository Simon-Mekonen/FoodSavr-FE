import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { FaRegClock, FaRegHeart, FaRegQuestionCircle } from "react-icons/fa";

interface IRecipeInfoProps {
  portions: number;
  cookingTime: number;
  ingredientMatches: number;
  inputIngredient: number;
}

export const RecipeInfo: React.FC<IRecipeInfoProps> = ({
  portions,
  cookingTime,
  ingredientMatches,
  inputIngredient,
}) => {
  return (
    <div className="Recipe-info">
      <Container maxWidth={"sm"} sx={{ textAlign: "center" }}>
        <Box className="Recipe-info-box" display={"flex"}>
          <Box p={2} flex={"auto"} className="Recipe-info-border">
            <FaRegQuestionCircle className="Icon-recipe-portions" />
            <p className="Stat-label">
              <span className="Stat-value">{portions}</span> PORT.
            </p>
          </Box>
          <Box p={2} flex={"auto"} className="Recipe-info-border">
            <FaRegClock className="Icon-recipe-timeleft" />
            <p className="Stat-label">
              <span className="Stat-value"> {cookingTime}</span> MIN
            </p>
          </Box>
          <Box p={2} flex={"auto"} className="Recipe-info-border">
            <FaRegHeart className="Icon-recipe-matches" />
            <p className="Stat-label">
              <span className="Stat-value">
                {ingredientMatches}/{inputIngredient + " RÅVAROR"}
              </span>
              {/* {" "} */}
            </p>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
