// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AssistantDirectionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AssistantDirectionIcon(props: AssistantDirectionIconProps) {
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
          "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-4.99 0-9-4.01-9-9s4.01-9 9-9 9 4.01 9 9-4.01 9-9 9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.73 11.42L12.54 4.2c-.36-.27-.8-.27-1.15 0L4.2 11.42c-.27.36-.27.8 0 1.16l7.19 7.22c.36.27.8.27 1.15 0l7.19-7.22c.36-.36.36-.89 0-1.16zM13.5 14.5l-1.41-1.41L13.17 12H10v3H8v-4c0-.6.4-1 1-1h4.17l-1.09-1.09L13.5 7.5 17 11l-3.5 3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AssistantDirectionIcon;
/* prettier-ignore-end */
