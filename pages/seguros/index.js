import Head from 'next/head';
import Image from 'next/image';
import BsNavBar from '../../components/sections/BsNavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grupo10 Montequinto</title>
        <meta
          name="description"
          content="Correduría de seguros Velarde Seguros - Grupo 10 Montequinto"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <BsNavBar />
    </div>
  );
}
