import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M9.66387694,13.2655141 C10.0544012,13.6560384 10.0544012,14.2892033 9.66387694,14.6797276 C9.27335265,15.0702519 8.64018767,15.0702519 8.24966338,14.6797276 L8.24966338,14.6797276 L3.29991591,9.72998015 C3.02955294,9.45961718 2.94636434,9.07295897 3.05035009,8.7310297 C3.09811383,8.57379139 3.18130244,8.43065817 3.30146376,8.31049685 L8.25121123,3.36074938 C8.64173552,2.97022509 9.2749005,2.97022509 9.66542479,3.36074938 C10.0559491,3.75127368 10.0559491,4.38443865 9.66542479,4.77496295 L6.4730227,7.96585616 L13.9783008,7.96650471 C17.844294,7.96650471 20.9783008,11.1005115 20.9783008,14.9665047 C20.9783008,17.2619701 19.8642848,19.3721542 18.028536,20.6763495 C17.5783066,20.9962119 16.9540239,20.8905286 16.6341615,20.4402992 C16.3142991,19.9900699 16.4199824,19.3657871 16.8702118,19.0459247 C18.1834267,18.1129601 18.9783008,16.6072988 18.9783008,14.9665047 C18.9783008,12.27775 16.8559941,10.0846866 14.1951904,9.97112423 L13.9783008,9.96650471 L6.3650227,9.96585616 Z" />
  </SvgIcon>
);

export default Icon;