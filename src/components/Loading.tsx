import * as React from 'react';

export interface ILoadingProps {
  status?: boolean;
}

export default function Loading(props: ILoadingProps) {
  return <div>Loading...</div>;
}
