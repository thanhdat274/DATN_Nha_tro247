import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

export interface IMeProps {}

export default function Me(props: IMeProps) {
  const { data: session, status } = useSession();

  return (
    <div>
      {session?.user?.name}
      {session?.user?.email}
      <div>
        <Image width={200} height={200} src={session?.user?.image as string} alt={session?.user?.image as string} />
      </div>
    </div>
  );
}
