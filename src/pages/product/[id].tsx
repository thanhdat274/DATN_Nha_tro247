import Head from 'next/head';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSWR from 'swr';
import ReactLoading from 'react-loading';

export interface IProductDetailProps {}

const todosEndpoint = 'https://fakestoreapi.com/products/';
const fetcher = async (id: any) => {
  const response = await fetch(todosEndpoint + id);
  return await response.json();
};

export default function ProductDetail(props: IProductDetailProps) {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  const { data, error } = useSWR(todosEndpoint, async () => fetcher(id));

  const backToProduct = () => {
    router.push('/product');
  };
  return (
    <div>
      <Head>
        <title>{data?.title}</title>
        <link rel="icon" href="https://i.ibb.co/cg0dw5n/7359334a75de4d73b9c2dfdd27257de4.png" />
      </Head>

      <div onClick={() => backToProduct()}>Back</div>
      {error ? (
        <div>{error.message}</div>
      ) : (
        <div>
          {loading ? (
            <ReactLoading type={'spinningBubbles'} color="red" width={300} height={300} />
          ) : (
            <>
              <div>product name: {data?.title}</div>
              <Image src={data?.image} width={100} height={100} alt={data?.title} />
              <div>product price: {data?.price} </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
