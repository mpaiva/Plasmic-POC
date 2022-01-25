// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotAccessibleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotAccessibleIcon(props: NotAccessibleIconProps) {
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
          "M10.71 3.695c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 9v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61l3.42 3.42c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83v-2.07a5 5 0 105.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2zM3.52 2.505L2.1 3.915l8.61 8.61v2.17c0 1.1.9 2 2 2h2.17l5.61 5.61 1.41-1.41L3.52 2.505z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NotAccessibleIcon;
/* prettier-ignore-end */
