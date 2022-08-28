import styles from './LayoutAdmin.module.css';
import { MENU_ADMIN } from '@/util/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import Navbar from '../Layouts/Navbar';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
export interface ILayoutAdminProps {
  children: ReactNode;
}

export default function LayoutAdmin({ children }: ILayoutAdminProps) {
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex flex-col">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden bg-[#f8f9fa] shadow-[-1px_1px_5px_0_#ccc] z-50">
        <button className="ml-2 my-2 text-2xl" onClick={changeToggle}>
          {!toggle ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
      <div className="flex">
        <div
          className={`navbar fixed lg:static flex flex-col lex-col-reverse divide-y divide-dashed w-1/2 md:w-1/4 lg:w-1/6 border-r border-b border-[#e6e6e6] bg-[#f8f9fa] duration-500 lg:left-0 z-50 ${
            !toggle ? 'left-[-50%]' : 'left-0'
          } ${styles.fix_height}`}
        >
          {MENU_ADMIN.map((item: any, index: number) => {
            return (
              <Link key={index} href={item.path}>
                <a className="py-2 pl-4">{item.name}</a>
              </Link>
            );
          })}
        </div>

        <div className={`navbar flex flex-col w-full p-10 ${styles.fix_height}`}>{children}</div>
      </div>
    </div>
  );
}
