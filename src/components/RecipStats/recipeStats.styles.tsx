import { Box } from "@mui/system";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const StatLabel = styled("p")({
  fontSize: 16,
  color: baseTheme.colors.black,
  marginBottom: 4,
  marginTop: 4,
  fontWeight: 500,
  margin: 0,
});

export const StatValue = styled("span")({
  fontWeight: 700,
});

export const BoxBorder = styled(Box)({
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
