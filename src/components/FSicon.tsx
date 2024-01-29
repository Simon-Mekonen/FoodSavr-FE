import styled from "styled-components";
import { FaRegClock, FaRegHeart, FaRegQuestionCircle } from "react-icons/fa";
import { IconType } from "react-icons";

export const StyledIcon = styled("div")({
  color: "#fd7463",
  fontSize: "20px",
});

const iconComponents: Record<string, IconType> = {
  Clock: FaRegClock,
  Heart: FaRegHeart,
  Question: FaRegQuestionCircle,
};
export const FsIcon = ({ type }: { type: string }) => {
  const IconComponent = iconComponents[type] || null;

  return <StyledIcon>{IconComponent && <IconComponent />}</StyledIcon>;
};
