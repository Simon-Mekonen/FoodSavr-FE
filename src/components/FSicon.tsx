import styled from "styled-components";
import { FaRegClock, FaRegHeart, FaRegQuestionCircle } from "react-icons/fa";
import { IconType } from "react-icons";

const StyledIcon = styled("div")({
  color: "#fd7463",
  fontSize: "20px",
});

export const iconComponents: Record<string, IconType> = {
  Clock: FaRegClock,
  Heart: FaRegHeart,
  Question: FaRegQuestionCircle,
};
export const FSIcon = ({ type }: { type: string }) => {
  const IconComponent = iconComponents[type] || null;

  return <StyledIcon>{IconComponent && <IconComponent />}</StyledIcon>;
};
