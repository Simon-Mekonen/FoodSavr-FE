import * as React from "react";
import { Box /*palette */ } from "@mui/system";
import { CardContent, CardMedia, Divider, Grid } from "@mui/material";
import { RecipeStat } from "../RecipStats/recipeStats";
import { boxSize, StyledCard, StyledDescriptionP } from "./recipeCard.styles";
import { StyledH2 } from "../../styles/theme";
import {
  currentRecipeIDState,
  ingredientSearchIdsState,
} from "../../store/recoilStore";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { generatePath, useNavigate } from "react-router-dom";
import { IRecipeBlob } from "../../API/API.types";

export const RecipeCard = ({
  recipeCardData,
  ingredientCount,
  key,
}: {
  recipeCardData: IRecipeBlob;
  ingredientCount: number;
  key: string | number;
}) => {
  const { id, name, description, imgLink, portions, cookingTime, matches } =
    recipeCardData;
  const ingredientIds = useRecoilValue(ingredientSearchIdsState);
  const currentRecipeID = useSetRecoilState(currentRecipeIDState);

  const navigate = useNavigate();

  const handleRecipeSelection = (ingredientIds: number[], recipeId: number) => {
    // Update state
    currentRecipeID(recipeId);
    // Create URL:
    generatePath("/recipe/:recipeId/:ingredientIds", {
      recipeId: String(recipeId),
      ingredientIds: String(ingredientIds),
    });

    const url = `/recipe/${recipeId}/${ingredientIds}`;

    navigate(url);
  };

  return (
    <Box sx={boxSize} key={key}>
      {/* <Link to={href}> */}
      <StyledCard onClick={() => handleRecipeSelection(ingredientIds, id)}>
        <CardContent>
          <CardMedia
            style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            // classes={wideCardMediaStyles}
            image={
              imgLink
                ? imgLink
                : "https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?ssl=1"
            }
          />
          <StyledH2>{name}</StyledH2>
          <StyledDescriptionP /*className={styles.subheader}*/>
            {description!.length > 150
              ? `${description!.substring(0, 120)}...`
              : description}
          </StyledDescriptionP>
        </CardContent>
        <Divider style={{ background: "#57807f38" }} />
        <Box display={"flex"}>
          {/* className={borderedGridStyles.item}*/}

          <Grid container>
            <RecipeStat
              type={"Question"}
              value={portions}
              text={"Port"}
              border={false}
            />

            <RecipeStat
              type={"Clock"}
              value={cookingTime}
              text={"MIN"}
              border={false}
            />

            <RecipeStat
              type={"Heart"}
              value={matches + "/" + ingredientCount}
              text={"RÅVAROR"}
              border={false}
            />
          </Grid>
        </Box>
      </StyledCard>
      {/* </Link> */}
    </Box>
  );
};
