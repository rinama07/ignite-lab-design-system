import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps, TextSize } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: TextSize,
      control: { type: 'inline-radio' }
    }
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Customized: StoryObj<TextProps> = {
  args: {
    children: <p>Hello</p>,
    asChild: true,
  },
  argTypes: {
    children: {
      table: {
        disable: true
      },
    },
  },
};