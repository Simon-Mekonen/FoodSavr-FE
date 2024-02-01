import { Box, styled } from "@mui/system";
import { FsIcon } from "./fsIcon";
import { baseTheme } from "../styles/theme";
import { Grid } from "@mui/material";

export interface IInnerContentProps {
  type: string;
  text: string;
}

export interface IRecipeStatProps extends IInnerContentProps {
  border: boolean;
}

// TODO: Add so that the PORT, MIN, RÅVAROR is not bold

export const RecipeStat = ({ type, text, border }: IRecipeStatProps) => {
  console.log(type, text, border);
  return (
    <Grid item xs={4}>
      {border ? (
        <StyledBoxBorder>
          <InnerContent type={type} text={text} />
        </StyledBoxBorder>
      ) : (
        <Box p={2} flex="auto">
          <InnerContent type={type} text={text} />
        </Box>
      )}
    </Grid>
  );
};

//TODO: stop using so many Stat...., should it be just regular div???
const InnerContent: React.FC<IInnerContentProps> = ({ type, text }) => {
  return (
    <>
      <StyledStatLabel>
        <FsIcon type={type} />
      </StyledStatLabel>
      <StyledStatLabel>
        <StyledStatValue>{text}</StyledStatValue>
      </StyledStatLabel>
    </>
  );
};

const StyledStatLabel = styled("p")({
  fontSize: 12,
  color: baseTheme.colors.lightGrey,
  fontWeight: 500,
  margin: 0,
});

const StyledStatValue = styled("span")({
  fontSize: 16,
  fontWeight: 900,
  marginBottom: 4,
  marginTop: 4,
  color: baseTheme.colors.black,
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
