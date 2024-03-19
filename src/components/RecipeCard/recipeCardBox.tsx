import { Box } from "@mui/system";
import { ReactNode } from "react";

const boxSize = {
  width: "356px",
  mt: "20px",
  mx: "10px",
  flexBasis: "25%",
};
interface IRecipeCardBoxProps {
  key: string | number;
  children?: ReactNode;
}

export const RecipeCardBox: React.FC<IRecipeCardBoxProps> = ({
  key,
  children,
}) => {
  return (
    <Box sx={boxSize} key={key}>
      {children}
    </Box>
  );
};
