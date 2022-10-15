import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { TextSize } from '../../constants/TextSize';

export type TextComponent = 'label' | 'p' | 'span';
export type TextColor = 'primary' | 'secondary';

export interface TextProps{
  children: string;
  color?: TextColor;
  component?: TextComponent;
  size?: TextSize;
}

export function Text({
  children,
  color = 'primary',
  component = 'span',
  size = 'md',
}: TextProps) {
  const Component = component;
  
  return (
    <Component className={clsx(
      'font-sans', 
      {
        'text-neutral-100': color === 'primary',
        'text-zinc-500': color === 'secondary',
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      }
    )}>{children}</Component>
  );
}