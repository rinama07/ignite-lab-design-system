import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

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

type InputTextLabel = LabelHTMLAttributes<HTMLLabelElement>;

function InputTextLabel(props: InputTextLabel) {
  return (
    <label {...props} className="text-text-primary font-semibold text-sm" />
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
  Label: InputTextLabel,
  Root: InputTextRoot,
  Input: InputTextInput,
  Icon: InputTextIcon,
};
