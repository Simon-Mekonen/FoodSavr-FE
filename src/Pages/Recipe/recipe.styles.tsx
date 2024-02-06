import { Box } from "@mui/system";
import { keyframes, styled } from "styled-components";

export const StyledH1 = styled("h1")({
  margin: 0,
  padding: "20px",
  textAlign: "center",
});

//TODO: Fix so keyframes work
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

export const StyledRecipeBox = styled(Box)({
  overflow: "hidden",
  animationTimingFunction: "ease-in",
  WebkitAnimationDuration: "10s",
  animationDuration: "0.4s",
  WebkitAnimationFillMode: "both",
  animationFillMode: "both",
  // animationName: bounceInUpKeyframes,
});

export const StyledRecipeHero = styled(Box)({
  position: "relative",
  padding: 0,
  maxWidth: "900px",
  maxHeight: "700px",
  margin: "0 auto",
  bordeRadius: "20px 20px 0 0",
  overflow: "hidden",
});
