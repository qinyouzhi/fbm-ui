import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const ArrowDropUpIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M12.3685771,9.40208408 L16.7319595,14.1621377 C16.9185557,14.3656972 16.9048043,14.6819809 16.7012448,14.8685771 C16.6090299,14.9531074 16.4884783,15 16.3633825,15 L7.63661752,15 C7.36047515,15 7.13661752,14.7761424 7.13661752,14.5 C7.13661752,14.3749042 7.18351012,14.2543526 7.26804045,14.1621377 L11.6314229,9.40208408 C11.8180191,9.19852458 12.1343028,9.18477312 12.3378623,9.37136932 C12.3485407,9.38115781 12.3587886,9.39140573 12.3685771,9.40208408 Z"
      transform="matrix(-1 0 0 1 24 0)"
    />
  </SvgIcon>
);

export default ArrowDropUpIcon;
