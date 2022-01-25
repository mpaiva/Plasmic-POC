// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlarmOnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlarmOnIcon(props: AlarmOnIconProps) {
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
          "M10.54 14.625l-2.13-2.13-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95zm6.797-12.72l4.607 3.845-1.28 1.535-4.61-3.843 1.283-1.537zm-10.675 0l1.282 1.536-4.607 3.844-1.28-1.536 4.606-3.844zM12 4.095a9 9 0 10.002 18.001A9 9 0 0012 4.095zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlarmOnIcon;
/* prettier-ignore-end */
