// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ViewInArIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ViewInArIcon(props: ViewInArIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zm0 16v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zm1 19c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zm-2-5.13V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ViewInArIcon;
/* prettier-ignore-end */
