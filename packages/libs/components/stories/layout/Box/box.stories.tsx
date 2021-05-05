import { Meta, Story } from "@storybook/react";
import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../../src";
import mdx from "./box.mdx";

import styles from "./styles.scss";

export default {
  title: "Components/Layout/Box",
  component: Box,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    children: {
      name: "children",
      type: { name: "React.ReactNode", required: true },
      table: {
        type: { summary: "text" },
      },
    },
    testId: {
      name: "testId",
    },
    as: {
      name: "as",
      description: "The name as what HTML tag the Box should render in the DOM.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "div" },
      },
      options: [
        "div",
        "main",
        "header",
        "footer",
        "section",
        "article",
        "nav",
        "form",
      ],
      control: {
        type: "select",
      },
    },
    className: {
      name: "className",
      type: { name: "boolean" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
        disable: true,
      },
      control: {
        disable: true,
      },
    },
    column: {
      name: "column",
      description: "Defines if the Box is a row (default) or a column flex-box.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;
/*
export const Args: Story<BoxProps> = args => <Box { ...args } />;
Args.args = {
  children: "Default Args",
  testId: "test-Id",
  column: false,
  className: classNames( styles.withBackground ),
};
*/
const Template: Story<BoxProps> = args => <Box { ...args } />;

export const Default: Story<BoxProps> = Template.bind( {} );
Default.args = {
  children: "Default Box",
};

export const Column: Story<BoxProps> = Template.bind( {} );
Column.args = {
  children: "Column Box",
  column: true,
};

export const WithBackground: Story<BoxProps> = Template.bind( {} );
WithBackground.args = {
  children: "With Background Style Box",
  className: classNames( styles.withBackground ),
};

export const WithBorder: Story<BoxProps> = Template.bind( {} );
WithBorder.args = {
  children: "With Border Style Box",
  className: classNames( styles.withBorder ),
};

export const WithBorderAndPadding: Story<BoxProps> = Template.bind( {} );
WithBorderAndPadding.args = {
  children: "With Border and padding Style Box",
  className: classNames( styles.withBorderAndPadding ),
};
