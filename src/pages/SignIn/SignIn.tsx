import { useState } from 'react';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { SignInForm } from './Form/Form';
import { Text } from '../../components/Text/Text';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  return (
    <div className="h-screen w-screen bg-background-page flex flex-col items-center justify-center">
      <Header />

      {isUserSignedIn ? (
        <Text className="text-center mt-8">Login realizado com sucesso!!</Text>
      ) : (
        <>
          <main className="flex flex-col items-stretch w-full max-w-sm mt-8">
            <SignInForm setIsUserSignedIn={setIsUserSignedIn} />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}
