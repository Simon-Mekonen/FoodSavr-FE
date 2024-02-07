// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const FsCloseButton = ({ onClickFunc }) => {
  return (
    <FsCloseIcon onClick={onClickFunc}>
      <button
        tabIndex={0}
        aria-label="Close"
        role="button"
        onClick={onClickFunc}
      ></button>
    </FsCloseIcon>
  );
};

export const FsCloseIcon = styled(FaRegTimesCircle)({
  position: "absolute",
  right: "20px",
  top: "20px",
  fontSize: "30px",
  cursor: "pointer",
  transition: "transform 0.15s ease-in",
  color: baseTheme.colors.white,
  borderRadius: "30px",
  //TODO: change this?
  active: {
    transform: "scale(0.8)",
  },
});
