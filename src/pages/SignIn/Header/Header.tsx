import { ShoppingBag } from 'phosphor-react';

import { Heading } from '../../../components/Heading/Heading';
import { Text } from '../../../components/Text/Text';

export function Header() {
  return (
    <header className="flex flex-col items-center">
      <ShoppingBag className="text-theme-primary w-28 h-28" />

      <div className="mt-6">
        <Heading size="lg">Sistema X</Heading>
      </div>

      <div className="mt-3">
        <Text size="lg" color="secondary">
          Boas vindas!
        </Text>
      </div>
    </header>
  );
}
