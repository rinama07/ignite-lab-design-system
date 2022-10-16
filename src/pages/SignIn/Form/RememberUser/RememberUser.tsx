import { Checkbox } from '../../../../components/Checkbox/Checkbox';

export function RememberUser() {
  return (
    <Checkbox.Root>
      <Checkbox.Label inputId="rememberUser" text="Lembrar de mim por 30 dias">
        <Checkbox.Input
          id="rememberUser"
          aria-label="Lembrar de mim por 30 dias"
        />
      </Checkbox.Label>
    </Checkbox.Root>
  );
}
