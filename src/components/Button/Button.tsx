import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export function Button({
  children,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'text-common-black bg-indigo-500 text-md font-sans px-3 py-4 rounded',
        'enabled:hover:bg-indigo-300 enabled:hover:cursor-pointer enabled:transition-colors',
        'enabled:focus:ring-2 disabled:opacity-60',
        {
          'w-full': fullWidth,
        }
      )}
    >
      {children}
    </button>
  );
}