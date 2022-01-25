// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HotelClassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HotelClassIcon(props: HotelClassIconProps) {
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
          "M10.66 8.89L11.6 12h2.82l-2.27 1.62.93 3.01-2.42-1.84-2.42 1.84.93-3.01L6.9 12h2.82l.94-3.11zM8.24 10H.66l6.17 4.41L4.49 22l6.17-4.69L16.84 22l-2.35-7.59L20.66 10h-7.58l-2.42-8-2.42 8zm12.78 12l-1.86-6.01L23.34 13H19.9l-3.08 2.2 1.46 4.72L21.02 22zM16.66 8l-1.82-6-1.04 3.45.77 2.55h2.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HotelClassIcon;
/* prettier-ignore-end */
