import * as React from "react";
import { Box /*palette */ } from "@mui/system";
import { Card, CardContent, CardMedia, Divider, styled } from "@mui/material";
import { IRecipeCardProps } from "./home.types";
import { RecipeStat } from "../recipeStats";
import { baseTheme } from "../../styles/theme";

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
          <StyledH4 /*className={styles.subheader}*/>
            {recipeDescription.length > 150
              ? `${recipeDescription.substring(0, 120)}...`
              : recipeCardData.description}
          </StyledH4>
        </CardContent>
        <Divider style={{ background: "#57807f38" }} />
        <Box display={"flex"}>
          {/* className={borderedGridStyles.item}*/}

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
            type={"Clock"}
            text={recipeCardData.matches + "/" + ingredientCount + " RÅVAROR"}
            border={false}
          />
        </Box>
      </StyledCard>
    </Box>
  );
};

const boxSize = {
  width: "356px",
  mt: "20px",
  mx: "10px",
};

const StyledCard = styled(Card)({
  borderRadius: 12,
  minWidth: 256,
  maxWidth: 356,
  textAlign: "center",
});
const StyledH3 = styled("h3")({
  //Heading
  fontSize: 18,
  fontWeight: "bold",
  letterSpacing: "0.5px",
  marginTop: 10,
  marginBottom: 8,
});

const StyledH4 = styled("h4")({
  //SubHeading
  fontSize: 15,
  color: baseTheme.colors.darkGrey,
  marginBottom: 8,
});
