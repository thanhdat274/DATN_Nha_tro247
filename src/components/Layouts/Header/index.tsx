import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-modal';
import Tabs from './Tabs';

import {
  faAngleDown,
  faCirclePlus,
  faCircleUser,
  faClockRotateLeft,
  faCreditCard,
  faHeart,
  faListCheck,
  faPen,
  faRightFromBracket,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import Navbar from '../Navbar';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    minWidth: '200px',
    width: '100%',
    minHeight: '300px',
  },
};

export default function Header() {
  const [toggle, setToogle] = useState(false);
  const toggleNav = () => {
    setToogle(!toggle);
  };
  const { data: session, status } = useSession();

  const getAll = true;

  return (
    <div className="shadow lg:shadow-none mb-4 sm:mb-6 md:mb-14 xl:mb-20">
      <div className="container mx-auto">
        <div className="flex lg:hidden justify-between items-center">
          <div className="w-[200px] h-[50px] relative">
            <Image src="/images/logo.svg" alt="logo" layout="fill" priority />
          </div>
          <div className="flex items-center" onClick={() => toggleNav()}>
            <FontAwesomeIcon className="text-2xl" icon={faBars} />
            <span className="ml-2">Danh mục</span>
          </div>
          {/* >>>>>>> develop */}
        </div>
      </div>
      <header
        className={`fixed lg:relative lg:block right-0 lg:right-0 top-0  w-4/5 lg:w-full h-full bg-white z-10 ease-in duration-300 ${
          toggle ? 'right-0' : 'right-[-100%]'
        }`}
      >
        <div className="container mx-auto bg-[#3f51b5] lg:bg-transparent">
          <div className="flex justify-between items-center h-fit lg:h-[70px] px-[15px] lg:px-0 py-[20px] lg:py-0">
            <Link href={'/'}>
              <a className="hidden lg:block w-[240px] h-[70px] relative">
                <Image src="/images/logo.svg" alt="logo" layout="fill" priority></Image>
              </a>
            </Link>
     
          </div>
        </div>
        <Navbar key="navbar" />
        <button className="block lg:hidden absolute top-2 right-5 text-white text-2xl" onClick={() => toggleNav()}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </header>

      {toggle && (
        <div
          className=" before:bg-[#0000003b] before:w-full before:h-full before:absolute before:inset-0"
          onClick={() => toggleNav()}
        ></div>
      )}
    </div>
  );
}
