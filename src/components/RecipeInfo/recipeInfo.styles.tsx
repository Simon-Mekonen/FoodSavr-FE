import { Box } from "@mui/system";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const StyledRecipeBox = styled(Box)({
  textAlign: "center",
  padding: "10px",
  backgroundColor: baseTheme.colors.cyan,
  borderTop: `1px dotted ${baseTheme.colors.pink}`,
  borderBottom: `1px dotted ${baseTheme.colors.pink}`,
});
