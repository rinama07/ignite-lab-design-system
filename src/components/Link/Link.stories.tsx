import { Meta, StoryObj } from '@storybook/react';

import { Link, LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    },
  },
} as Meta<LinkProps>;

export const Default: StoryObj<LinkProps> = {};
