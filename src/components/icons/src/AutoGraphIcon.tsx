import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const AutoGraphIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M21,8 C22.1,8 23,8.9 23,10 C23,11.45 21.56,12.26 20.49,11.93 L20.49,11.93 L16.93,15.48 C17.27,16.56 16.45,18 15,18 C13.54,18 12.73,16.55 13.07,15.48 L13.07,15.48 L10.52,12.93 C10.22,13.02 9.78,13.02 9.48,12.93 L9.48,12.93 L4.93,17.49 C5.26,18.56 4.45,20 3,20 C1.9,20 1,19.1 1,18 C1,16.55 2.44,15.74 3.51,16.07 L3.51,16.07 L8.07,11.52 C7.73,10.44 8.55,9 10,9 C11.46,9 12.27,10.45 11.93,11.52 L11.93,11.52 L14.48,14.07 C14.78,13.98 15.22,13.98 15.52,14.07 L15.52,14.07 L19.07,10.51 C18.74,9.44 19.55,8 21,8 Z M3.5,6 L4,8 L6,8.5 L4,9 L3.5,11 L3,9 L1,8.5 L3,8 L3.5,6 Z M15,3 L15.94,5.07 L18,6 L15.94,6.93 L15,9 L14.08,6.93 L12,6 L14.08,5.07 L15,3 Z"
    />
  </SvgIcon>
);

export default AutoGraphIcon;
