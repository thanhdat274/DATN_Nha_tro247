import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import * as React from 'react';

export interface ICanHoProps {
  canho?: any;
}

export default function CanHo(props: ICanHoProps) {
  const { canho } = props;

  console.log('canho', canho);

  return (
    <div>
      <h1>Can ho detail</h1>
      <p>{canho.title}</p>

      <p>
        <Image height={360} width={360} src="https://iili.io/S1JrBe.png" alt="https://iili.io/S1JrBe.png" />
      </p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch('https://62e1008dfa99731d75cb0b2b.mockapi.io/cho-thue-can-ho');
  const data = await result.json();

  return {
    paths: data.map((item: any) => ({ params: { id: item.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ICanHoProps> = async (context: GetStaticPropsContext) => {
  const id = context?.params?.id;

  if (!id) {
    return { notFound: true };
  }

  const result = await fetch(`https://62e1008dfa99731d75cb0b2b.mockapi.io/cho-thue-can-ho/${id}`);
  const data = await result.json();

  return {
    props: {
      canho: data,
    },
    revalidate: 300,
  };
};
