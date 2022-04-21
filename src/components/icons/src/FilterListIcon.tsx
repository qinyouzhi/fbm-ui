import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const FilterListIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M11,18 L13,18 C13.5522847,18 14,17.5522847 14,17 C14,16.4477153 13.5522847,16 13,16 L11,16 C10.4477153,16 10,16.4477153 10,17 C10,17.5522847 10.4477153,18 11,18 Z M3,7 C3,7.55228475 3.44771525,8 4,8 L20,8 C20.5522847,8 21,7.55228475 21,7 C21,6.44771525 20.5522847,6 20,6 L4,6 C3.44771525,6 3,6.44771525 3,7 Z M7,13 L17,13 C17.5522847,13 18,12.5522847 18,12 C18,11.4477153 17.5522847,11 17,11 L7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 Z"
    />
  </SvgIcon>
);

export default FilterListIcon;
