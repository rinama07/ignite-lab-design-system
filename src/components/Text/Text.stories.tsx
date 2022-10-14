import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  argTypes: {
    color: {
      table: { disable: true }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {
  argTypes: {
    component: {
      table: { disable: true }
    },
  },
};

export const Secondary: StoryObj<TextProps> = {
  args: { 
    color: 'secondary',
  },
  argTypes: {
    component: {
      table: { disable: true }
    },
  },
};

export const Customized: StoryObj<TextProps> = {
  args: {
    component: 'label',
  },
  argTypes: {
    component: {
      options: ['label', 'p', 'span'],
      control: { type: 'select' }
    },
  }
};