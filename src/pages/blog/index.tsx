import React from 'react';
import dynamic from 'next/dynamic';

const Page: any = dynamic(() => import('src/container/Blog'), { ssr: true });

export default function Index() {
  return <Page />;
}
