import { Box, Stack } from "@mui/system";
import { FaCheckCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IStepsProps, IRecipeStepsDoneProps } from "./steps.types";

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
    <Box sx={{ my: 2 }}>
      <h3>Tillaga</h3>
      <Stack spacing={2}>
        {steps.map((step, key) => {
          return (
            <div
              className={
                step.done
                  ? "Recipe-check-step Recipe-paper"
                  : "Recipe-steps Recipe-paper"
              }
              key={key}
              sx={{ textAlign: "left", py: 2 }}
              onClick={() => {
                updateStep(key);
              }}
            >
              {step.done ? (
                <FaCheckCircle key={key} className="Recipe-check-icon" />
              ) : (
                <FaRegArrowAltCircleRight
                  key={key}
                  className="Recipe-step-icon"
                />
              )}
              <span className="Recipe-step-num">{step.row}:</span> {step.text}
            </div>
          );
        })}
      </Stack>
    </Box>
  );
};
