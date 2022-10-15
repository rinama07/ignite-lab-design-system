import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
    component: 'h1',
  },
  argTypes: {
    component: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  argTypes: {
    component: {
      table: { disable: true },
    },
  },
};

export const Customized: StoryObj<HeadingProps> = {
  args: {
    component: 'h6',
  },
};
