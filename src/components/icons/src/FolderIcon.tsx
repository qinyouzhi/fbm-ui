import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const FolderIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10.58548,5 C10.9147449,5 11.2334746,5.11605361 11.4856529,5.32776463 L13.48,7.001 L18.9972436,7.0011847 C19.5495284,7.0011847 19.9972436,7.44889995 19.9972436,8.0011847 L19.9972436,17.9748231 C19.9972436,18.5271079 19.5495284,18.9748231 18.9972436,18.9748231 L5,18.9748231 C4.44771525,18.9748231 4,18.5271079 4,17.9748231 L4,6 C4,5.44771525 4.44771525,5 5,5 L10.58548,5 Z M15.9211674,14 L6.5,14 L6.41012437,14.0080557 C6.17687516,14.0503916 6,14.2545401 6,14.5 L6,14.5 L6,15.5 L6.00805567,15.5898756 C6.05039163,15.8231248 6.25454011,16 6.5,16 L6.5,16 L15.9211674,16 L16.011043,15.9919443 C16.2442922,15.9496084 16.4211674,15.7454599 16.4211674,15.5 L16.4211674,15.5 L16.4211674,14.5 L16.4131117,14.4101244 C16.3707758,14.1768752 16.1666273,14 15.9211674,14 L15.9211674,14 Z M11.9068484,10 L6.5,10 L6.41012437,10.0080557 C6.17687516,10.0503916 6,10.2545401 6,10.5 L6,10.5 L6,11.5 L6.00805567,11.5898756 C6.05039163,11.8231248 6.25454011,12 6.5,12 L6.5,12 L11.9068484,12 L11.996724,11.9919443 C12.2299732,11.9496084 12.4068484,11.7454599 12.4068484,11.5 L12.4068484,11.5 L12.4068484,10.5 L12.3987927,10.4101244 C12.3564568,10.1768752 12.1523083,10 11.9068484,10 L11.9068484,10 Z"
    />
  </SvgIcon>
);

export default FolderIcon;
