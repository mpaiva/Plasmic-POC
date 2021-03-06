// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WarningIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WarningIcon(props: WarningIconProps) {
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
        d={"M1 21.5h22l-11-19-11 19zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WarningIcon;
/* prettier-ignore-end */
