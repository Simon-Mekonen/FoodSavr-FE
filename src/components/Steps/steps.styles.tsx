import { FaRegArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const Step = ({
  done,
  row,
  text,
  key,
}: {
  done: boolean | undefined;
  row: number;
  text?: string;
  key: number;
}) => {
  return done ? (
    <>
      <StepIcon color={baseTheme.colors.pink}>
        <FaCheckCircle key={key} />
      </StepIcon>
      <StepChecked>
        <StepNo>{row}:</StepNo> {text}
      </StepChecked>
    </>
  ) : (
    <>
      <StepIcon color={baseTheme.colors.darkGrey}>
        <FaRegArrowAltCircleRight key={key} />
      </StepIcon>
      <StepText>
        <StepNo>{row}:</StepNo> {text}
      </StepText>
    </>
  );
};

export const StepContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StepIcon = styled("div")(({ color }) => ({
  fontSize: "20px",
  color: color,
  verticalAlign: "middle",
  marginRight: "6px",
}));

export const StepText = styled("p")({
  textAlign: "left",
  paddingLeft: "8px",
  cursor: "pointer",
});

export const StepChecked = styled(StepText)({
  backgroundColor: baseTheme.colors.lightGrey,
  textDecoration: "line-through",
  opacity: 0.8,
  border: "none",
  borderRadius: "4px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  color: "rgba(0, 0, 0, 0.6)",
  boxShadow: "0 0 10px",
});

export const StepNo = styled("span")({
  fontWeight: 900,
});
