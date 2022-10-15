import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
    fullWidth: false,
  },
  argTypes: {
    disabled: {
      table: { disable: true },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
