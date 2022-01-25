// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VisibilityOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VisibilityOffIcon(props: VisibilityOffIconProps) {
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
          "M12 5.975a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53-1.73-4.39-6-7.5-11-7.5-1.27 0-2.49.2-3.64.57l1.65 1.65c.65-.13 1.31-.22 1.99-.22zm-1.07 1.14L13 9.185c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07.01-2.48-2.01-4.49-4.49-4.49-.37 0-.72.05-1.07.14zm-8.92-3.27l2.68 2.68A11.738 11.738 0 001 11.475c1.73 4.39 6 7.5 11 7.5 1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.425l-1.41 1.42zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VisibilityOffIcon;
/* prettier-ignore-end */
