import styled from "styled-components";
import { IRecipeIngredientComplete } from "../../Pages/Recipe/recipe.types";
import { baseTheme } from "../../styles/theme";

export const StyledIngredient = styled("p")({
  textAlign: "left",
  backgroundColor: baseTheme.colors.checkedBackground,
  marginBottom: "10px",
  marginRight: "10px",
  padding: "8px",
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 1.43,
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  borderRadius: "4px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  color: "rgba(0, 0, 0, 0.6)",
});
export const StyledReplacement = styled(StyledIngredient)({
  color: baseTheme.colors.white,
  backgroundColor: baseTheme.colors.green,
});

export const Ingredient: React.FC<IRecipeIngredientComplete> = ({
  quantity,
  measurement,
  originalIngredient,
}) => {
  return (
    <StyledIngredient>
      <strong>
        {quantity} {measurement}
      </strong>{" "}
      {originalIngredient}
    </StyledIngredient>
  );
};

// TODO: styling ok?
export const ReplacedIngredient: React.FC<IRecipeIngredientComplete> = ({
  quantity,
  measurement,
  originalIngredient,
  replacement,
}) => {
  return (
    <StyledReplacement>
      <strong>
        {quantity} {measurement}
      </strong>{" "}
      {originalIngredient}{" "}
      <span color={baseTheme.colors.replacedText}>ersätter {replacement}</span>
    </StyledReplacement>
  );
};
