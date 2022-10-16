import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Text } from '../Text/Text';

interface InputTextRootProps {
  children: ReactNode;
}

function InputTextRoot({ children }: InputTextRootProps) {
  return (
    <div
      className={`bg-background-field px-3 py-4 flex items-center gap-3
        rounded w-full focus-within:ring-2 ring-theme-secondary`}
    >
      {children}
    </div>
  );
}

interface InputTextLabelProps {
  children?: ReactNode;
  inputId: string;
  text: string;
}

function InputTextLabel({ children, inputId, text }: InputTextLabelProps) {
  return (
    <label htmlFor={inputId} className="flex flex-col gap-3">
      <Text className="font-semibold">{text}</Text>
      {children}
    </label>
  );
}

interface InputTextIcon {
  children: ReactNode;
}

function InputTextIcon({ children }: InputTextIcon) {
  return (
    <Slot className="text-text-placeholder w-6 h-6 disabled:opacity-60">
      {children}
    </Slot>
  );
}

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

function InputTextInput(props: InputTextProps) {
  return (
    <input
      {...props}
      type="text"
      className={`bg-common-transparent placeholder:text-text-placeholder
      text-text-primary flex-1 text-xs outline-none disabled:opacity-60`}
    />
  );
}

export const InputText = {
  Icon: InputTextIcon,
  Input: InputTextInput,
  Label: InputTextLabel,
  Root: InputTextRoot,
};
