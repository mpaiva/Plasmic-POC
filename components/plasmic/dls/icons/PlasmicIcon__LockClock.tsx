// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockClockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockClockIcon(props: LockClockIconProps) {
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
          "M4.5 20V10h12v1c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.42-.6-.75-1.28-.97-2H4.5zm3-14c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6V6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.5 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16 18.2V15h1v2.79l1.85 1.85-.7.71z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockClockIcon;
/* prettier-ignore-end */
