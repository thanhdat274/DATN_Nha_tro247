import ListData from '@/components/ListData';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface IChoThueCanHoProps {
  canho: any;
}

export default function ChoThueCanHo(props: IChoThueCanHoProps) {
  const { canho } = props;

  return (
    <div className="canho-container">
      <h1>Cho thuê căn hộ</h1>
      <ListData data={canho} />
    </div>
  );
}
