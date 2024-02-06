import { Card } from "@mui/material";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const boxSize = {
  width: "356px",
  mt: "20px",
  mx: "10px",
};

export const StyledCard = styled(Card)({
  borderRadius: 12,
  minWidth: 256,
  maxWidth: 356,
  textAlign: "center",
});

export const StyledDescriptionP = styled("p")({
  //SubHeading
  fontSize: 15,
  color: baseTheme.colors.darkGrey,
  marginBottom: 8,
});
