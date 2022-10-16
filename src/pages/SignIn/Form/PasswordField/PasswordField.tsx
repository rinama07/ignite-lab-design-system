import { LockSimple } from 'phosphor-react';

import { InputText } from '../../../../components/InputText/InputText';

export function PasswordField() {
  return (
    <InputText.Label inputId="password" text="Senha">
      <InputText.Root>
        <InputText.Icon>
          <LockSimple />
        </InputText.Icon>
        <InputText.Input id="password" type="password" placeholder="********" />
      </InputText.Root>
    </InputText.Label>
  );
}
