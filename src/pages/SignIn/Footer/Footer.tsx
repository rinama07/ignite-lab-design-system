import { Link } from '../../../components/Link/Link';

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 mt-8">
      <Link size="sm" href="#!">
        Esqueceu sua senha?
      </Link>

      <Link size="sm" href="#!">
        Não possui conta? Crie uma agora!
      </Link>
    </footer>
  );
}
