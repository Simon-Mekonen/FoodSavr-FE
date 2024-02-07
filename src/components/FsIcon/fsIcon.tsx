import { FaRegClock, FaRegHeart, FaRegQuestionCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import { StyledIcon } from "./fsIcon.styles";

const iconComponents: Record<string, IconType> = {
  Clock: FaRegClock,
  Heart: FaRegHeart,
  Question: FaRegQuestionCircle,
};
export const FsIcon = ({ type }: { type: string }) => {
  const IconComponent = iconComponents[type] || null;

  return <StyledIcon>{IconComponent && <IconComponent />}</StyledIcon>;
};
