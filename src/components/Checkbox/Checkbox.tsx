import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { ReactNode } from 'react';

interface CheckboxRootProps {
  children: ReactNode;
}

function CheckboxRoot({ children }: CheckboxRootProps) {
  return (
    <div className='flex items-center gap-2'>
      {children}
    </div>
  )
}

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {};

function CheckboxInput(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root {...props} className='w-6 h-6 p-[2px] rounded bg-zinc-700 disabled:opacity-60'>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-indigo-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <CheckboxRoot>
      <CheckboxInput {...props} />
      {children}
    </CheckboxRoot>
  )
}