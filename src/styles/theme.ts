import styled from "styled-components";

export const baseTheme = {
  colors: {
    pink: "#fd7463",
    green: "#5b968f",
    white: "#ffffff",
    lightGrey: "#9e9e9e",
    darkGrey: "#5c5c5c",
    black: "#000",
    dark: "#00000014",
    checkedBackground: "#efefef",
    replacedText: "#2a3d3d",
  },
};

export const StyledH3 = styled("h3")({
  //Heading
  fontSize: 18,
  fontWeight: "bold",
  letterSpacing: "0.5px",
  marginTop: 10,
  marginBottom: 8,
});
