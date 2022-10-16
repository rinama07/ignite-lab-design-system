import { Envelope, LockSimple, ShoppingBag } from 'phosphor-react';
import { FormEvent } from 'react';

import { Button } from './components/Button/Button';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Heading } from './components/Heading/Heading';
import { InputText } from './components/InputText/InputText';
import { Link } from './components/Link/Link';
import { Text } from './components/Text/Text';
import './styles/global.css';

export function App() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log('form submit');
  }

  return (
    <div className="h-screen w-screen bg-background-page flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <ShoppingBag className="text-theme-primary w-28 h-28" />

        <div className="mt-6">
          <Heading size="lg">Sistema X</Heading>
        </div>

        <div className="mt-3">
          <Text size="lg" color="secondary">
            Faça login e comece a usar!
          </Text>
        </div>
      </header>

      <main className="flex flex-col items-stretch w-full max-w-sm mt-8">
        <form onSubmit={handleSubmit}>
          <InputText.Label inputId="email" text="Endereço de e-mail">
            <InputText.Root>
              <InputText.Icon>
                <Envelope />
              </InputText.Icon>
              <InputText.Input
                id="email"
                type="email"
                placeholder="user@email.com"
              />
            </InputText.Root>
          </InputText.Label>

          <InputText.Label inputId="password" text="Senha">
            <InputText.Root>
              <InputText.Icon>
                <LockSimple />
              </InputText.Icon>
              <InputText.Input
                id="password"
                type="password"
                placeholder="********"
              />
            </InputText.Root>
          </InputText.Label>

          <Checkbox.Root>
            <Checkbox.Label
              inputId="rememberUser"
              text="Lembrar de mim por 30 dias"
            >
              <Checkbox.Input
                id="rememberUser"
                aria-label="Lembrar de mim por 30 dias"
              />
            </Checkbox.Label>
          </Checkbox.Root>

          <Button type="submit" fullWidth>
            Entrar
          </Button>
        </form>
      </main>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Link size="sm" href="#!">
          Esqueceu sua senha?
        </Link>

        <Link size="sm" href="#!">
          Não possui conta? Crie uma agora!
        </Link>
      </footer>
    </div>
  );
}
