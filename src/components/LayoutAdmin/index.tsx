import styles from './LayoutAdmin.module.css';
import { MENU_ADMIN } from '@/util/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import Navbar from '../Layouts/Navbar';

import { faBars } from '@fortawesome/free-solid-svg-icons';
export interface ILayoutAdminProps {
  children: ReactNode;
}

export default function LayoutAdmin({ children }: ILayoutAdminProps) {
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" flex flex-col">
      <div className="sm:block lg:hidden">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="hidden lg:block ">
        <Navbar />
      </div>

      <div className="flex">
        <div className="navbar flex flex-col lex-col-reverse divide-y divide-dashed h-screen p-3 border-r border-[#e6e6e6] bg-[#f8f9fa] w-2/3 sm:w-1/4 md:w-1/6 fixed sm:static z-50">
          {MENU_ADMIN.map((item: any, index: number) => {
            return (
              <Link key={index} href={item.path}>
                <a className="py-2 pl-2">{item.name}</a>
              </Link>
            );
          })}
        </div>

        <div className="navbar flex flex-col w-full px-10 py-5 sm:w-3/4 md:w-5/6">{children}</div>
      </div>
    </div>
  );
}
