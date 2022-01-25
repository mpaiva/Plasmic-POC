// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppSettingsAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppSettingsAltIcon(props: AppSettingsAltIconProps) {
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
          "M20.328 12.74l-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48a.395.395 0 00-.35-.2c-.05 0-.1.01-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01a.408.408 0 00-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06-.95-.38a.401.401 0 00-.5.17l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63a.39.39 0 00-.1.51l.85 1.48c.07.13.21.2.35.2.05 0 .1-.01.15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06.95.38a.401.401 0 00.5-.17l.85-1.48a.39.39 0 00-.1-.51zm-3.81.76c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-1 4.5h-10V6h10v1h2V3c0-1.1-.9-2-2-2h-10c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zm-10-15h10v1h-10V3zm10 18h-10v-1h10v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppSettingsAltIcon;
/* prettier-ignore-end */
