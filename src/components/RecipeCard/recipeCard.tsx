import * as React from "react";
import { Box /*palette */ } from "@mui/system";
import { CardContent, CardMedia, Divider, Grid } from "@mui/material";
import { RecipeStat } from "../recipeStats";
import { IRecipeCardProps } from "./recipeCard.types";
import {
  boxSize,
  StyledCard,
  StyledDescriptionP,
  StyledH3,
} from "./recipeCard.styles";

export const RecipeCard: React.FC<IRecipeCardProps> = ({
  recipeCardData,
  ingredientCount,
  key,
}) => {
  const recipeDescription = recipeCardData.description!;

  return (
    <Box sx={boxSize} key={key} onClick={() => console.log(recipeCardData)}>
      <StyledCard /*className={cx(styling.card, shadowStyles.root)}*/>
        <CardContent>
          <CardMedia
            style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            // classes={wideCardMediaStyles}
            image={
              recipeCardData.imgLink
                ? recipeCardData.imgLink
                : "https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?ssl=1"
            }
          />
          <StyledH3 /*className={styles.heading}*/>
            {recipeCardData.name}
          </StyledH3>
          <StyledDescriptionP /*className={styles.subheader}*/>
            {recipeDescription.length > 150
              ? `${recipeDescription.substring(0, 120)}...`
              : recipeCardData.description}
          </StyledDescriptionP>
        </CardContent>
        <Divider style={{ background: "#57807f38" }} />
        <Box display={"flex"}>
          {/* className={borderedGridStyles.item}*/}

          <Grid container>
            <RecipeStat
              type={"Question"}
              text={recipeCardData.portions + " PORT"}
              border={false}
            />

            <RecipeStat
              type={"Clock"}
              text={recipeCardData.cookingTime + " MIN"}
              border={false}
            />

            <RecipeStat
              type={"Heart"}
              text={recipeCardData.matches + "/" + ingredientCount + " RÅVAROR"}
              border={false}
            />
          </Grid>
        </Box>
      </StyledCard>
    </Box>
  );
};
