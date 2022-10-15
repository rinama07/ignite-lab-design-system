import { clsx } from 'clsx';
import { AnchorHTMLAttributes } from 'react';

import { TextSize } from '../../constants/TextSize';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: TextSize;
}

export function Link({
  size = 'md',
  children,
  ...props
}: LinkProps) {
  return (
    <a 
      {...props}
      className={clsx(
        'text-text-secondary underline hover:cursor-pointer font-sans', 
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        }
      )}
    >{children}</a>
  );
}