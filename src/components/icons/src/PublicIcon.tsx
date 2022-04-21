import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const PublicIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M11,19.93 C7.05,19.44 4,16.08 4,12 C4,11.38 4.08,10.79 4.21,10.21 L9,15 L9,16 C9,17.1 9.9,18 11,18 L11,19.93 Z M17.9,17.39 C17.64,16.58 16.9,16 16,16 L15,16 L15,13 C15,12.45 14.55,12 14,12 L8,12 L8,10 L10,10 C10.55,10 11,9.55 11,9 L11,7 L13,7 C14.1,7 15,6.1 15,5 L15,4.59 C17.93,5.78 20,8.65 20,12 C20,14.08 19.2,15.97 17.9,17.39 Z"
    />
  </SvgIcon>
);

export default PublicIcon;
