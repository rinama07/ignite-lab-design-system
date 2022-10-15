import { clsx } from 'clsx';

import { TextSize } from '../../constants/TextSize';

export type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  children: string;
  component?: HeadingComponent;
  size?: TextSize;
}

export function Heading({
  children,
  component = 'h1',
  size = 'md',
}: HeadingProps) {
  const Component = component;

  return (
    <Component
      className={clsx('text-text-primary font-bold font-sans', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </Component>
  );
}
