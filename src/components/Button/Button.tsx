import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export function Button({ children, fullWidth = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'text-common-black bg-theme-primary text-md font-semibold px-4 py-3 rounded outline-none',
        'enabled:hover:bg-theme-secondary enabled:hover:text-common-black enabled:hover:ring-0',
        'enabled:cursor-pointer transition-colors disabled:opacity-60',
        'focus:bg-background-highlight focus:text-common-white focus:ring-2 ring-common-white',
        {
          'w-full': fullWidth,
        }
      )}
    >
      {children}
    </button>
  );
}
