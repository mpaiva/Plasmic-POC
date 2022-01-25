// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NextPlanIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NextPlanIcon(props: NextPlanIconProps) {
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
          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.97 11.03C14.87 9.79 13.28 9 11.5 9c-2.82 0-5.18 1.95-5.82 4.56l.96.32C7.15 11.66 9.13 10 11.5 10c1.51 0 2.85.68 3.76 1.74L13 14h5V9l-2.03 2.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NextPlanIcon;
/* prettier-ignore-end */
