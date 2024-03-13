import { Box } from "@mui/system";
import styled, { keyframes } from "styled-components";

const bounceInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  60% {
    opacity: 1;
    transform: translateY(10px);
  }
  80% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  animation-name: ${bounceInRight};
  animation-duration: 0.6s;
  animation-fill-mode: both;
`;
