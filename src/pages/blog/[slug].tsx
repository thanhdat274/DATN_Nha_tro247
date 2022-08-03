import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IBlogDetailProps {
  canho?: any;
}

export default function BlogDetail(props: IBlogDetailProps) {
  const { canho } = props;

  const router = useRouter();
  return (
    <div>
      this is blog detail
      <div>{JSON.stringify(router.query)}</div>
    </div>
  );
}
