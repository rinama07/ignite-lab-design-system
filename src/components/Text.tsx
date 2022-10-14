import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export enum TextSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
};

export interface TextProps{
  asChild?: boolean;
  children: ReactNode;
  comp: ReactNode;
  size?: TextSize;
}

export function Text({
  asChild = false,
  children,
  size = TextSize.md,
}: TextProps) {
  const Component = asChild ? Slot : 'span';
  
  return (
    <Component className={clsx(
      'text-neutral-100 font-sans', 
      {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      }
    )}>{children}</Component>
  )
}