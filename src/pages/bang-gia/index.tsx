import React from 'react';
import dynamic from 'next/dynamic';

const Page: any = dynamic(() => import('src/container/BangGia'), {
  ssr: false,
});

export default function Index() {
  return <Page />;
}
