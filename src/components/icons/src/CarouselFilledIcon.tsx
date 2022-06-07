import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M6,6 C6.55228475,6 7,6.44771525 7,7 L7,17 C7,17.5522847 6.55228475,18 6,18 L3,18 C2.44771525,18 2,17.5522847 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L6,6 Z M21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L18,18 C17.4477153,18 17,17.5522847 17,17 L17,7 C17,6.44771525 17.4477153,6 18,6 L21,6 Z M15,4 C15.5522847,4 16,4.44771525 16,5 L16,19 C16,19.5522847 15.5522847,20 15,20 L9,20 C8.44771525,20 8,19.5522847 8,19 L8,5 C8,4.44771525 8.44771525,4 9,4 L15,4 Z" />
  </SvgIcon>
);

export default Icon;