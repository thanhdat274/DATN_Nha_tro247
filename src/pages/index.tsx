import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="https://i.ibb.co/cg0dw5n/7359334a75de4d73b9c2dfdd27257de4.png" />
      </Head>
      <h1>Home Page</h1>
      <FontAwesomeIcon icon={faHouse} />
    </div>
  );
};

export default Home;
