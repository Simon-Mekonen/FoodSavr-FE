import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { IRecipeInfoProps } from "../RecipeInfo/recipeInfo.types";
import { RecipeStat } from "../recipeStats";

export const RecipeInfo: React.FC<IRecipeInfoProps> = ({
  portions,
  cookingTime,
  ingredientMatches,
  inputIngredient,
}) => {
  return (
    <div className="Recipe-info">
      <Container maxWidth={"sm"} sx={{ textAlign: "center" }}>
        <Box display={"flex"}>
          <Grid container>
            <RecipeStat
              type={"Question"}
              value={portions}
              text={"PORT"}
              border={true}
            />

            <RecipeStat
              type={"Clock"}
              value={cookingTime}
              text={" MIN"}
              border={true}
            />

            <RecipeStat
              type={"Heart"}
              value={ingredientMatches + " / " + inputIngredient}
              text={"RÅVAROR"}
              border={true}
            />
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

// TODO: add the below styles
// .Recipe-info {
//   /* background-color: rgb(229 245 243); */
//   border-top: 1px dotted #fd7463;
//   border-bottom: 1px dotted #fd7463;
//   margin-left: -22px;
//   margin-right: -22px;
// }
