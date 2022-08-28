// import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

export interface IMeProps {}

export default function Me(props: IMeProps) {
  // const { data: session, status } = useSession();

  return (
    <div>
      {/* {session?.user?.name} */}
      <div className="name">user name</div>
      {/* {session?.user?.email} */}
      <div className="email">user email</div>
      <div>{/* <Image width={200} height={200} src={} alt='image user' /> */}</div>
    </div>
  );
}
