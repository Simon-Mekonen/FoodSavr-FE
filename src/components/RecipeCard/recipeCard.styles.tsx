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
export const StyledH3 = styled("h3")({
  //Heading
  fontSize: 18,
  fontWeight: "bold",
  letterSpacing: "0.5px",
  marginTop: 10,
  marginBottom: 8,
});

export const StyledDescriptionP = styled("h4")({
  //SubHeading
  fontSize: 15,
  color: baseTheme.colors.darkGrey,
  marginBottom: 8,
});
