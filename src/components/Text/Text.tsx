import { clsx } from 'clsx';

import { TextSize } from '../../constants/TextSize';

export type TextComponent = 'label' | 'p' | 'span';
export type TextColor = 'primary' | 'secondary';

export interface TextProps {
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
    <Component
      className={clsx('font-sans', {
        'text-text-primary': color === 'primary',
        'text-text-secondary': color === 'secondary',
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Component>
  );
}
