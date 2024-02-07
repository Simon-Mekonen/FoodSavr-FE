import styled, { createGlobalStyle } from "styled-components";

export const baseTheme = {
  colors: {
    pink: "#fd7463",
    green: "#5b968f",
    greenDark: "#5b968f",
    cyan: "#e5f5f3",
    white: "#ffffff",
    lightGrey: "#efefef",
    darkGrey: "#5c5c5c",
    black: "#000",
    dark: "#00000014",
    replacedText: "#2a3d3d",
  },
  font: {},
};

export const StyledH2 = styled("h2")({
  //Heading
  fontSize: 18,
  fontWeight: "bold",
  letterSpacing: "0.5px",
  marginTop: 10,
  marginBottom: 8,
});

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  font-family: "Open Sans", sans-serif, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100vw
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Noto Serif Display", serif;
}

`;
