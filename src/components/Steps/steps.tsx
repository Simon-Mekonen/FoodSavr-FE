import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { StyledH2 } from "../../styles/theme";
import { Step, StepContainer } from "./steps.styles";
import { IRecipeSteps } from "../../API/API.types";

export interface IRecipeStepsDoneProps extends IRecipeSteps {
  done?: boolean;
}

export const Steps = ({
  recipeSteps,
}: {
  recipeSteps: IRecipeStepsDoneProps[];
}) => {
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
            <StepContainer
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
            </StepContainer>
          );
        })}
      </Stack>
    </Box>
  );
};
