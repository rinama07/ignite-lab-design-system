import { Envelope } from 'phosphor-react';

import { InputText } from '../../../../components/InputText/InputText';

export function EmailField() {
  return (
    <InputText.Label inputId="email" text="Endereço de e-mail">
      <InputText.Root>
        <InputText.Icon>
          <Envelope />
        </InputText.Icon>
        <InputText.Input id="email" type="email" placeholder="user@email.com" />
      </InputText.Root>
    </InputText.Label>
  );
}
