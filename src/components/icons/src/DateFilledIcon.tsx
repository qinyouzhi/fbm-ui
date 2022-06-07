import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M9.13333333,4 C9.24379028,4 9.33333333,4.08954305 9.33333333,4.2 L9.333,5.777 L14.666,5.777 L14.6666667,4.2 C14.6666667,4.08954305 14.7562097,4 14.8666667,4 L16.2444444,4 C16.3549014,4 16.4444444,4.08954305 16.4444444,4.2 L16.444,5.777 L18.2222222,5.77777778 C19.2040618,5.77777778 20,6.573716 20,7.55555556 L20,18.2222222 C20,19.2040618 19.2040618,20 18.2222222,20 L5.77777778,20 C4.79593822,20 4,19.2040618 4,18.2222222 L4,7.55555556 C4,6.573716 4.79593822,5.77777778 5.77777778,5.77777778 L7.555,5.777 L7.55555556,4.2 C7.55555556,4.08954305 7.64509861,4 7.75555556,4 L9.13333333,4 Z M18.2222222,11.2222222 L5.77777778,11.2222222 L5.77777778,18.2222222 L18.2222222,18.2222222 L18.2222222,11.2222222 Z" />
  </SvgIcon>
);

export default Icon;