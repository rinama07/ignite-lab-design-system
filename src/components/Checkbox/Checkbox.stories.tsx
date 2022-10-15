import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox.Root,
  args: {
    children: <Checkbox.Input label="Remember me" />,
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  },
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2'>
        {Story()}
      </div>
    )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {}