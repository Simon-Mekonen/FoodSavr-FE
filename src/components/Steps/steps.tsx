import { Box, Stack } from "@mui/system";
import styled from "styled-components";
import { FaCheckCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IStepsProps, IRecipeStepsDoneProps } from "./steps.types";
import { StyledH2, baseTheme } from "../../styles/theme";

// TODO: Add styles
export const Steps: React.FC<IStepsProps> = ({ recipeSteps }) => {
  const [steps, setSteps] = useState<IRecipeStepsDoneProps[]>([]);

  useEffect(() => {
    setSteps(recipeSteps);
  }, [recipeSteps]);

  const updateStep = (index: number) => {
    setSteps((prevSteps) => {
      const updatedSteps = [...prevSteps];
      updatedSteps[index] = {
        ...updatedSteps[index],
        done: !updatedSteps[index].done,
      };
      return updatedSteps;
    });
  };

  return (
    <Box>
      <StyledH2>Tillaga</StyledH2>
      <Stack>
        {steps.map((step, key) => {
          return (
            <Container
              onClick={() => {
                updateStep(key);
              }}
            >
              <Step
                done={step.done}
                row={step.row}
                text={step.text}
                key={key}
              />
            </Container>
          );
        })}
      </Stack>
    </Box>
  );
};

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
      <StepIcon color={baseTheme.colors.lightGrey}>
        <FaRegArrowAltCircleRight key={key} />
      </StepIcon>
      <StepChecked>
        <StepNo>{row}:</StepNo> {text}
      </StepChecked>
    </>
  ) : (
    <>
      <StepIcon color={baseTheme.colors.pink}>
        <FaCheckCircle key={key} />
      </StepIcon>
      <StepText>
        <StepNo>{row}:</StepNo> {text}
      </StepText>
    </>
  );
};

export const Container = styled("div")({
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
});

export const StepNo = styled("span")({
  fontWeight: 900,
});
