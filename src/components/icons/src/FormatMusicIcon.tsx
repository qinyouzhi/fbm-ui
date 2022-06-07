import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M20.9669304,4.49931147 C20.9815836,4.57249189 20.9913968,4.64645507 20.9963108,4.72078039 L21,4.8324874 L21,16.6537521 L20.9788707,16.6420858 C20.9928229,16.7594462 21,16.8788849 21,17 C21,18.6568542 19.6568542,20 18,20 C16.3431458,20 15,18.6568542 15,17 C15,15.3431458 16.3431458,14 18,14 C18.350972,14 18.6878673,14.0602698 19.0009007,14.1710242 L19,4.997 L8.918,6.547 L8.99979711,17.9647455 C8.99993225,17.976481 9,17.9882326 9,18 C9,19.6568542 7.65685425,21 6,21 C4.34314575,21 3,19.6568542 3,18 C3,16.3431458 4.34314575,15 6,15 C6.34838319,15 6.68289653,15.0593839 6.99396985,15.1685816 L6.91765822,6.38244185 C6.91765822,5.49256038 7.58754496,4.78491519 8.4476537,4.60013224 L8.60131458,4.57302045 L18.6981907,3.02094079 C19.7352999,2.87706651 20.7646417,3.48905246 20.9669304,4.49931147 Z M6,17 C5.44771525,17 5,17.4477153 5,18 C5,18.5522847 5.44771525,19 6,19 C6.55228475,19 7,18.5522847 7,18 C7,17.4477153 6.55228475,17 6,17 Z M18,16 C17.4477153,16 17,16.4477153 17,17 C17,17.5522847 17.4477153,18 18,18 C18.5522847,18 19,17.5522847 19,17 C19,16.4477153 18.5522847,16 18,16 Z" />
  </SvgIcon>
);

export default Icon;