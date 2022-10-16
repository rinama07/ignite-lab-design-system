import { Spinner } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { Button } from '../../../components/Button/Button';
import { EmailField } from './EmailField/EmailField';
import { PasswordField } from './PasswordField/PasswordField';
import { RememberUser } from './RememberUser/RememberUser';

interface SignInFormProps {
  setIsUserSignedIn: (e: boolean) => void;
}

export function SignInForm({ setIsUserSignedIn }: SignInFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsUserSignedIn(true);
      setIsLoading(false);
    }, 6000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <EmailField />
      <PasswordField />
      <RememberUser />

      <Button type="submit" fullWidth>
        {isLoading ? (
          <Spinner className="text-common-black self-center h-6 w-6 animate-spin" />
        ) : (
          'Entrar'
        )}
      </Button>
    </form>
  );
}
