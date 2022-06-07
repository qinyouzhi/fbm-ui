import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M4,4 L20,4 C20.5522847,4 21,4.44771525 21,5 C21,5.55228475 20.5522847,6 20,6 L4,6 C3.44771525,6 3,5.55228475 3,5 C3,4.44771525 3.44771525,4 4,4 Z M4,9 L20,9 C20.5522847,9 21,9.44771525 21,10 C21,10.5522847 20.5522847,11 20,11 L4,11 C3.44771525,11 3,10.5522847 3,10 C3,9.44771525 3.44771525,9 4,9 Z M4,14 L20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 L4,16 C3.44771525,16 3,15.5522847 3,15 C3,14.4477153 3.44771525,14 4,14 Z M4,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 C3,19.4477153 3.44771525,19 4,19 Z" />
  </SvgIcon>
);

export default Icon;