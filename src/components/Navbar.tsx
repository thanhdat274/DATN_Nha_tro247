import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MENU } from '../util/constant';

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const router = useRouter();
  console.log('router', router.pathname);

  return (
    <div className="flex sm:justify-center bg-blue-500 w-full my-auto ">
      <div className="flex flex-col sm:w-7xl sm:flex-row gap-4">
        {MENU.map((items: any, index: number) => (
          <Link href={items.path} key={index}>
            <a
              className={
                router.pathname === items.path
                  ? 'my-auto w-auto text-white sm:text-lg sm:font-medium sm:bg-red-500 sm:py-4 sm:px-2 max-h-14'
                  : 'my-auto w-auto text-white sm:text-lg sm:font-medium sm:py-4 sm:px-2 max-h-14'
              }
            >
              {items.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
