import { Box } from "@mui/system";
import { FsIcon } from "../FsIcon/fsIcon";
import { Grid } from "@mui/material";
import { BoxBorder, StatLabel, StatValue } from "./recipeStats.styles";

export interface IInnerContentProps {
  type: string;
  text: string;
  value: number | string;
}

export interface IRecipeStatProps extends IInnerContentProps {
  border: boolean;
}

export const RecipeStat = ({ type, value, text, border }: IRecipeStatProps) => {
  return (
    <Grid item xs={4}>
      {border ? (
        <BoxBorder>
          <InnerContent type={type} value={value} text={text} />
        </BoxBorder>
      ) : (
        <Box p={2} flex="auto">
          <InnerContent type={type} text={text} value={value} />
        </Box>
      )}
    </Grid>
  );
};

//TODO: stop using so many Stat...., should it be just regular div???
const InnerContent: React.FC<IInnerContentProps> = ({ type, text, value }) => {
  return (
    <>
      <FsIcon type={type} />
      <StatLabel>
        <StatValue>{value}</StatValue> {text}
      </StatLabel>
    </>
  );
};
