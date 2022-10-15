import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { LabelHTMLAttributes, ReactNode } from "react";
import { Text, TextProps } from '../Text/Text';

interface CheckboxRootProps {
  children: ReactNode; 
}

function CheckboxRoot({ children }: CheckboxRootProps) {
  return (
    <div className='flex items-center gap-2 '>
      {children}
    </div>
  )
}

function CheckboxLabel({ children }: TextProps) {
  return (
    <Text component='label' color='primary' size='sm'>{children}</Text>
  )
}

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label: string;
};

function CheckboxInput({ label, ...props }: CheckboxProps) {
  return (
    <>
      <CheckboxPrimitive.Root
        {...props}
        className='w-6 h-6 p-[2px] rounded bg-background-field disabled:opacity-60'
        aria-label={label}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight='bold' className='h-5 w-5 text-theme-primary' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <CheckboxLabel>{label}</CheckboxLabel>
    </>
  );
}

export const Checkbox = {
  Root: CheckboxRoot,
  Input: CheckboxInput,
}