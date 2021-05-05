import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { cli } from "webpack";
import { Button, ButtonProps } from "../../../src";
import mdx from "./index.mdx";

export default {
  title: "Components/Forms/Button",
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    children: {
      name: "children",
      description: "children to be rendered",
      type: { name: "React.ReactNode", required: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    testId: {
      name: "testId",
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
    onClick: {
      name: "onClick",
      description: "click handler callback",
      type: { summary: "function" },
      table: {
        defaultValue: { summary: undefined },
      },
      // action: "clicked",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button { ...args } />;

export const Default: Story<ButtonProps> = Template.bind( {} );
Default.args = {
  children: "Default Button",
};

export const WithOnClick: Story<ButtonProps> = Template.bind( {} );
WithOnClick.args = {
  children: "Button With Click Handler",
  onClick: action( "WithOnClick" ),
};

export const Foo = () => {
  const clickHandler = () => {};
  return <Button onClick={ clickHandler } isDisabled>Hello</Button>;
};
