// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wKYGFqyVBmDVb7fPCj2tLF
// Component: _YJ5Q7Yox4
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dls.module.css"; // plasmic-import: wKYGFqyVBmDVb7fPCj2tLF/projectcss
import sty from "./PlasmicAvatar.module.css"; // plasmic-import: _YJ5Q7Yox4/css

export type PlasmicAvatar__VariantMembers = {
  text: "text";
  size: "xl" | "large" | "medium" | "small" | "xs";
};

export type PlasmicAvatar__VariantsArgs = {
  text?: SingleBooleanChoiceArg<"text">;
  size?: SingleChoiceArg<"xl" | "large" | "medium" | "small" | "xs">;
};

type VariantPropType = keyof PlasmicAvatar__VariantsArgs;
export const PlasmicAvatar__VariantProps = new Array<VariantPropType>(
  "text",
  "size"
);

export type PlasmicAvatar__ArgsType = {
  initials?: React.ReactNode;
  image?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAvatar__ArgsType;
export const PlasmicAvatar__ArgProps = new Array<ArgPropType>(
  "initials",
  "image"
);

export type PlasmicAvatar__OverridesType = {
  avatar?: p.Flex<"button">;
};

export interface DefaultAvatarProps {
  initials?: React.ReactNode;
  image?: React.ReactNode;
  text?: SingleBooleanChoiceArg<"text">;
  size?: SingleChoiceArg<"xl" | "large" | "medium" | "small" | "xs">;
  className?: string;
}

function PlasmicAvatar__RenderFunc(props: {
  variants: PlasmicAvatar__VariantsArgs;
  args: PlasmicAvatar__ArgsType;
  overrides: PlasmicAvatar__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    true ? (
      <button
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.button,
          projectcss.root_reset,
          sty.avatar,
          {
            [sty.avatarsize_large]: hasVariant(variants, "size", "large"),
            [sty.avatarsize_medium]: hasVariant(variants, "size", "medium"),
            [sty.avatarsize_small]: hasVariant(variants, "size", "small"),
            [sty.avatarsize_xl]: hasVariant(variants, "size", "xl"),
            [sty.avatarsize_xs]: hasVariant(variants, "size", "xs"),
            [sty.avatartext]: hasVariant(variants, "text", "text"),
            [sty.avatartext_size_large]:
              hasVariant(variants, "text", "text") &&
              hasVariant(variants, "size", "large"),
            [sty.avatartext_size_medium]:
              hasVariant(variants, "text", "text") &&
              hasVariant(variants, "size", "medium")
          }
        )}
      >
        {(
          hasVariant(variants, "text", "text") &&
          hasVariant(variants, "size", "large")
            ? false
            : hasVariant(variants, "size", "large")
            ? true
            : hasVariant(variants, "text", "text")
            ? false
            : true
        )
          ? p.renderPlasmicSlot({
              defaultContents: true ? (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__sp8Fs)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/dls/images/matheusFerreroKmuTlgruLrUUnsplashjpg.jpeg",
                    fullWidth: 640,
                    fullHeight: 427,
                    aspectRatio: undefined
                  }}
                />
              ) : null,
              value: args.image
            })
          : null}
        {(
          hasVariant(variants, "text", "text") &&
          hasVariant(variants, "size", "large")
            ? true
            : hasVariant(variants, "size", "large")
            ? false
            : hasVariant(variants, "text", "text")
            ? true
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: "ww",
              value: args.initials,
              className: classNames(sty.slotTargetInitials, {
                [sty.slotTargetInitialssize_large]: hasVariant(
                  variants,
                  "size",
                  "large"
                ),
                [sty.slotTargetInitialstext]: hasVariant(
                  variants,
                  "text",
                  "text"
                ),
                [sty.slotTargetInitialstext_size_large]:
                  hasVariant(variants, "text", "text") &&
                  hasVariant(variants, "size", "large"),
                [sty.slotTargetInitialstext_size_medium]:
                  hasVariant(variants, "text", "text") &&
                  hasVariant(variants, "size", "medium"),
                [sty.slotTargetInitialstext_size_small]:
                  hasVariant(variants, "text", "text") &&
                  hasVariant(variants, "size", "small"),
                [sty.slotTargetInitialstext_size_xl]:
                  hasVariant(variants, "text", "text") &&
                  hasVariant(variants, "size", "xl"),
                [sty.slotTargetInitialstext_size_xs]:
                  hasVariant(variants, "text", "text") &&
                  hasVariant(variants, "size", "xs")
              })
            })
          : null}
      </button>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  avatar: ["avatar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  avatar: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatar__VariantsArgs;
    args?: PlasmicAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAvatar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatar__ArgProps,
      internalVariantPropNames: PlasmicAvatar__VariantProps
    });

    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "avatar") {
    func.displayName = "PlasmicAvatar";
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("avatar"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */
