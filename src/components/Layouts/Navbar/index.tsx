import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MENU } from '@/util/constant';

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const router = useRouter();

  return (
    <div className="bg-transparent lg:bg-[#1266dd]">
      <div className="container mx-auto block lg:flex items-center h-fit lg:h-10 px-[15px] mt-[20px] lg:mt-[0]">
        {MENU.map((items: any, index: number) => (
          <Link href={items.path} key={index}>
            <a
              className={`text-black lg:text-white font-bold px-0 lg:px-4 h-full block lg:inline-flex items-center py-[10px] pl-[20px] hover:bg-transparent lg:hover:bg-[#f73859] ${
                router.pathname === items.path ? 'bg-transparent lg:bg-[#f73859]' : ''
              }`}
            >
              {items.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
