import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps, GetStaticPropsContext } from 'next';

interface ICanHoProps {
  canho?: any;
}
const Page: any = dynamic(() => import('src/container/ChoThueCanHo'), { ssr: true });

export default function Index(props: ICanHoProps) {
  return <Page canho={props.canho} />;
}

export const getStaticProps: GetStaticProps<ICanHoProps> = async (context: GetStaticPropsContext) => {
  const result = await fetch('https://62e1008dfa99731d75cb0b2b.mockapi.io/cho-thue-can-ho');
  const data = await result.json();

  return {
    props: {
      canho: data,
    },
  };
};
