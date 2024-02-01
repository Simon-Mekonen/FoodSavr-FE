import { Box, styled } from "@mui/system";
import { FsIcon } from "./fsIcon";
import { baseTheme } from "../styles/theme";
import { Grid } from "@mui/material";

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
        <StyledBoxBorder>
          <InnerContent type={type} value={value} text={text} />
        </StyledBoxBorder>
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
      <div>
        <FsIcon type={type} />
      </div>
      <StyledStatLabel>
        <StyledStatValue>{value}</StyledStatValue> {text}
      </StyledStatLabel>
    </>
  );
};

const StyledStatLabel = styled("p")({
  fontSize: 16,
  color: baseTheme.colors.black,
  marginBottom: 4,
  marginTop: 4,
  fontWeight: 500,
  margin: 0,
});

const StyledStatValue = styled("span")({
  fontWeight: 700,
});

const StyledBoxBorder = styled(Box)({
  p: 2,
  position: "relative",
  flex: "auto",

  "&:not(:last-of-type)::after": {
    top: "50%",
    right: "0px",
    width: "1px",
    height: "50%",
    display: "block",
    position: "absolute",
    transform: "translateY(-50%)",
    borderRight: "1px dotted",
    backgroundColor: baseTheme.colors.dark,
    borderColor: baseTheme.colors.pink,
  },
});
