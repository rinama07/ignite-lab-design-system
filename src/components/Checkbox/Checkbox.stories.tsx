import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    children: {
      table: { disable: true }
    },
  }
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  }
};

export const WithText: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    children: <Text size="sm">Remember me</Text>,
  },
};

export const DisabledWithText: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    children: <Text size="sm">Remember me</Text>,
  },
};