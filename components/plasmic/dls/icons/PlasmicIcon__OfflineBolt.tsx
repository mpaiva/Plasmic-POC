// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OfflineBoltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OfflineBoltIcon(props: OfflineBoltIconProps) {
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
          "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98 0 5.51 4.47 9.98 9.98 9.98 5.51 0 9.98-4.47 9.98-9.98 0-5.51-4.47-9.98-9.98-9.98zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3V5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OfflineBoltIcon;
/* prettier-ignore-end */
