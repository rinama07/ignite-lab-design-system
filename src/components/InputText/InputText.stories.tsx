import { Meta, StoryObj } from '@storybook/react';
import { LockSimple } from 'phosphor-react';

import { InputText, InputTextProps } from './InputText';

export default {
  title: 'Components/InputText',
  component: InputText.Root,
  args: {
    children: <InputText.Input id="test" placeholder="Type your name" />,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} as Meta<InputTextProps>;

export const Default: StoryObj<InputTextProps> = {};

export const Disabled: StoryObj<InputTextProps> = {
  args: {
    children: (
      <InputText.Input id="test" placeholder="Type your name" disabled />
    ),
  },
};

export const Filled: StoryObj<InputTextProps> = {
  args: {
    children: (
      <InputText.Input
        id="test"
        placeholder="Type your name"
        value="User name"
      />
    ),
  },
};

export const WithIcon: StoryObj<InputTextProps> = {
  args: {
    children: (
      <>
        <InputText.Icon>
          <LockSimple />
        </InputText.Icon>
        <InputText.Input id="test" placeholder="Type your name" />
      </>
    ),
  },
};

export const WithLabel: StoryObj<InputTextProps> = {
  decorators: [
    (Story) => (
      <InputText.Label inputId="test" text="Full name">
        {Story()}
      </InputText.Label>
    ),
  ],
};
