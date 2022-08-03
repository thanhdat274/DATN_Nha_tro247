import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export interface IProductProps {
  productList: [];
}

interface IItemProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export default function Product(props: IProductProps) {
  const { productList } = props;
  const router = useRouter();

  const onHandleRedirect = (id: any) => {
    router.push(`product/${id}`);
  };

  return (
    <div>
      <h1>Product Page</h1>
      {productList?.map((item: IItemProduct, index: number) => {
        return (
          <div key={item.id} onClick={() => onHandleRedirect(item.id)}>
            {item.title} - {item.price} vnd
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { productList: data }, // will be passed to the page component as props
  };
}
