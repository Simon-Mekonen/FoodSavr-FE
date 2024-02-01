import { Box, Stack } from "@mui/system";
import { IngredientProps } from "./ingredient.types";

export const Ingredients: React.FC<IngredientProps> = ({ ingredients }) => {
  return (
    <>
      <Box>
        <h3>Ingredienser</h3>
        <Stack
          direction="row"
          sx={{ flexWrap: "wrap", alignItems: "flex-start" }}
        >
          {ingredients.map((ingredient, key) =>
            ingredient.replacement ? (
              <div
                className="Ingredients Recipe-paper Replaced"
                key={key}
                sx={{ textAlign: "left", py: 1 }}
              >
                <p>
                  <strong>
                    {ingredient.quantity} {ingredient.measurement}
                  </strong>{" "}
                  {ingredient.replacement}{" "}
                  <span className="Replaced-text">
                    (ersätter {ingredient.originalIngredient})
                  </span>
                </p>
              </div>
            ) : (
              <div
                className="Ingredients Recipe-paper"
                key={key}
                sx={{ textAlign: "left", py: 1 }}
              >
                <p>
                  <strong>
                    {ingredient.quantity} {ingredient.measurement}
                  </strong>{" "}
                  {ingredient.originalIngredient}
                </p>
              </div>
            )
          )}
        </Stack>
      </Box>
    </>
  );
};
