import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Visite la página dirección{' '}
      <Link href="/seguros">
        <a>velarde.com.es/seguros</a>
      </Link>{' '}
      por favor.
    </div>
  );
}
