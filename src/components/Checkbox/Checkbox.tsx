import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { ReactNode } from 'react';
import { Text } from '../Text/Text';

interface CheckboxRootProps {
  children: ReactNode;
}

function CheckboxRoot({ children }: CheckboxRootProps) {
  return <div className="flex mt-4 mb-4">{children}</div>;
}

interface CheckboxLabelProps {
  children?: ReactNode;
  inputId: string;
  text: string;
}

function CheckboxLabel({ children, inputId, text }: CheckboxLabelProps) {
  return (
    <label htmlFor={inputId} className="flex items-center gap-3 cursor-pointer">
      {children}
      <Text size="sm">{text}</Text>
    </label>
  );
}

export type CheckboxProps = RadixCheckbox.CheckboxProps;

function CheckboxInput(props: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      {...props}
      className="w-6 h-6 p-[2px] rounded bg-background-field disabled:opacity-60"
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-theme-primary" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

export const Checkbox = {
  Label: CheckboxLabel,
  Root: CheckboxRoot,
  Input: CheckboxInput,
};
