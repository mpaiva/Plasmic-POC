// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PrivateConnectivityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PrivateConnectivityIcon(props: PrivateConnectivityIconProps) {
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
          "M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-6.93 6c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07zM14 10.5v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0010 9.5v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-2 3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm1-3.25h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PrivateConnectivityIcon;
/* prettier-ignore-end */
