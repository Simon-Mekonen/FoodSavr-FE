import { Box } from "@mui/system";
import { keyframes, styled } from "styled-components";
import { baseTheme } from "../../styles/theme";

export const StyledH1 = styled("h1")({
  margin: 0,
  padding: "10px 0 10px 10px",
  textAlign: "left",
  fontFamily: "Pacifico, cursive",
  backgroundColor: baseTheme.colors.pink,
  background: `
  -webkit-linear-gradient(
    to right,
    ${baseTheme.colors.pink} 0%,
    ${baseTheme.colors.pink} 19%,
    ${baseTheme.colors.greenDark} 17%,
    ${baseTheme.colors.greenDark} 100%,
  ),
  -moz-linear-gradient(
    to right,
    ${baseTheme.colors.pink} 0%,
    ${baseTheme.colors.pink} 19%,
    ${baseTheme.colors.greenDark} 17%,
    ${baseTheme.colors.greenDark} 100%,
  ),
  linear-gradient(
    to right,
    ${baseTheme.colors.pink} 0%,
    ${baseTheme.colors.pink} 19%,
    ${baseTheme.colors.greenDark} 17%,
    ${baseTheme.colors.greenDark} 100%,
  )`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});
// #57807f 100%

const bounceInUpKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1000px);
  }
  60% {
    transform: translateY(-30px);
  }
  80% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledRecipeBox = styled(Box)`
  overflow: hidden;
  animation-timing-function: ease-in;
  -webkit-animation-duration: 10s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: ${bounceInUpKeyframes};
`;

export const StyledRecipeHero = styled(Box)({
  position: "relative",
  padding: 0,
  maxWidth: "900px",
  maxHeight: "700px",
  margin: "0 auto",
  bordeRadius: "20px 20px 0 0",
  overflow: "hidden",
});
