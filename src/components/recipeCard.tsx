import * as React from "react";
import { Box, palette } from "@mui/system";
import { IRecipeBlob } from "../API/API.types";
import { Card, CardContent, CardMedia } from "@mui/material";

interface RecipeCardProps {
  recipeCardData: IRecipeBlob;
  ingredientCount: number;
  key: string | number;
}
const RecipeCard: React.FC<RecipeCardProps> = ({
  recipeCardData,
  ingredientCount,
  key,
}) => {
  const recipeDescription = recipeCardData.description!;

  return (
    <Box sx={boxSize} key={key} onClick={() => console.log(recipeCardData)}>
      <Card /*className={cx(styling.card, shadowStyles.root)}*/>
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
          <h3 /*className={styles.heading}*/>{recipeCardData.name}</h3>
          <span /*className={styles.subheader}*/>
            {recipeDescription.length > 150
              ? `${recipeDescription.substring(0, 120)}...`
              : recipeCardData.description}
          </span>
        </CardContent>
        {/* <Divider style={{ background: "#57807f38" }} /> */}
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} /*className={borderedGridStyles.item}*/>
            {/* <p className={styles.statLabel}>
              <FaRegQuestionCircle className="Icon-recipe-portions" />
            </p> */}

            <p className="Stat-label">
              <span className="Stat-value">{recipeCardData.portions}</span>{" "}
              PORT.
            </p>
          </Box>
          <Box p={2} flex={"auto"}>
            {/* <p className={styles.statLabel}>
              <FaRegClock className="Icon-recipe-timeleft" />
            </p> */}

            <p className="Stat-label">
              <span className="Stat-value">
                {/* {" "} */}
                {recipeCardData.cookingTime + " MIN"}
              </span>
              {/* {" "} */}
            </p>
          </Box>
          <Box p={2} flex={"auto"}>
            {/* <p className={styles.statLabel}>
              <FaRegHeart className="Icon-recipe-matches" />
            </p> */}

            <p className="Stat-label">
              <span className="Stat-value">
                {recipeCardData.matches}/{ingredientCount + " RÅVAROR"}
              </span>{" "}
            </p>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

const boxSize = {
  width: "356px",
  mt: "20px",
  mx: "10px",
};

const styles = {
  card: {
    borderRadius: 12,
    minWidth: 256,
    maxWidth: 356,
    textAlign: "center",
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 10,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 15,
    color: "#5c5c5c",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "grey",
    fontWeight: 500,
    margin: 0,
    padding: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
};

export default RecipeCard;
