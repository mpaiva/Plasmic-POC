// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wCJeXuMs8cuqojoPF89h4m
// Component: PFIuoJa29P
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

import projectcss from "./plasmic_plasmic_poc.module.css"; // plasmic-import: wCJeXuMs8cuqojoPF89h4m/projectcss
import sty from "./PlasmicInputDate.module.css"; // plasmic-import: PFIuoJa29P/css

export type PlasmicInputDate__VariantMembers = {};

export type PlasmicInputDate__VariantsArgs = {};
type VariantPropType = keyof PlasmicInputDate__VariantsArgs;
export const PlasmicInputDate__VariantProps = new Array<VariantPropType>();

export type PlasmicInputDate__ArgsType = {};
type ArgPropType = keyof PlasmicInputDate__ArgsType;
export const PlasmicInputDate__ArgProps = new Array<ArgPropType>();

export type PlasmicInputDate__OverridesType = {
  root?: p.Flex<"form">;
};

export interface DefaultInputDateProps {
  className?: string;
}

function PlasmicInputDate__RenderFunc(props: {
  variants: PlasmicInputDate__VariantsArgs;
  args: PlasmicInputDate__ArgsType;
  overrides: PlasmicInputDate__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <form
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "form";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputDate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputDate__VariantsArgs;
    args?: PlasmicInputDate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInputDate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputDate__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputDate__ArgProps,
      internalVariantPropNames: PlasmicInputDate__VariantProps
    });

    return PlasmicInputDate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputDate";
  } else {
    func.displayName = `PlasmicInputDate.${nodeName}`;
  }
  return func;
}

export const PlasmicInputDate = Object.assign(
  // Top-level PlasmicInputDate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicInputDate
    internalVariantProps: PlasmicInputDate__VariantProps,
    internalArgProps: PlasmicInputDate__ArgProps
  }
);

export default PlasmicInputDate;
/* prettier-ignore-end */
