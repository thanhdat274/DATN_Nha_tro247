import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Tippy from '@tippyjs/react/headless';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import Navbar from '../Navbar';

export default function Header() {
  const { data: session, status } = useSession();

  console.log('session', session);

  const [toggle, setToogle] = useState(false);
  const toggleNav = () => {
    setToogle(!toggle);
  };

  return (
    <div className="shadow lg:shadow-none">
      <div className="container mx-auto">
        <div className="flex lg:hidden justify-between items-center">
          <div className="w-[200px] h-[50px] relative">
            <Image src="/images/logo.svg" alt="logo" layout="fill" priority />
          </div>
          <div className="flex items-center" onClick={() => toggleNav()}>
            <FontAwesomeIcon className="text-2xl" icon={faBars} />
            <span className="ml-2">Danh mục</span>
          </div>
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
            <div className="flex">
              {!session && (
                <div>
                  <Link href={`/api/auth/signin`}>
                    <a
                      className="h-10 rounded bg-[#ffc107] lg:bg-[#3961fb] font-bold text-black lg:text-white inline-flex items-center justify-center px-2.5 ml-1"
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                    >
                      Đăng nhập
                    </a>
                  </Link>
                  <Link href={'/dangky'}>
                    <a className="h-10 rounded bg-[#ffc107] lg:bg-[#3961fb] font-bold text-black lg:text-white inline-flex items-center justify-center px-2.5 ml-1">
                      Đăng ký
                    </a>
                  </Link>
                </div>
              )}
              {session?.user && (
                <div className="flex">
                  <Link href={'/'}>
                    <div className="flex cursor-pointer mr-2">
                      <div className="mr-2">
                        <Image
                          width={40}
                          height={40}
                          src={
                            session.user.image
                              ? session.user.image
                              : 'https://freeimage.host/content/images/system/logo_homepage_1577917990964_282d1e.webp'
                          }
                          alt={session.user.name ? session.user.name : 'image'}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold">{session.user.name}</p>
                        <p>Số dư: 0 VNĐ</p>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <Tippy
                      trigger="click"
                      placement="bottom-start"
                      interactive={true}
                      render={(attrs) => (
                        <div
                          className="min-w-[200px] bg-white shadow shadow-[#4b4b4b4d] py-[15px] px-5 rounded-[5px]"
                          {...attrs}
                        >
                          <Link href={'/dang-tin'}>
                            <a className="flex items-center py-[10px] border-b-[1px] border-inherit">
                              <FontAwesomeIcon icon={faPen} />
                              <span className="ml-2">Đăng tin cho thuê</span>
                            </a>
                          </Link>
                          <Link href={'/quan-ly-dang-tin'}>
                            <a className="flex items-center py-[10px] border-b-[1px] border-inherit">
                              <FontAwesomeIcon icon={faListCheck} />
                              <span className="ml-2">Quản lý đăng tin</span>
                            </a>
                          </Link>
                          <Link href={'/nap-tien'}>
                            <a className="flex items-center py-[10px] border-b-[1px] border-inherit">
                              <FontAwesomeIcon icon={faCreditCard} />
                              <span className="ml-2">Nạp tiền</span>
                            </a>
                          </Link>
                          <Link href={'/lich-su-nap-tien'}>
                            <a className="flex items-center py-[10px] border-b-[1px] border-inherit">
                              <FontAwesomeIcon icon={faClockRotateLeft} />
                              <span className="ml-2">Lịch sử nạp tiền</span>
                            </a>
                          </Link>
                          <Link href={'/thong-tin-ca-nhan'}>
                            <a className="flex items-center py-[10px] border-b-[1px] border-inherit">
                              <FontAwesomeIcon icon={faCircleUser} />
                              <span className="ml-2">Thông tin cá nhân</span>
                            </a>
                          </Link>
                          <Link href={'/tin-da-luu'}>
                            <a className="flex items-center py-[10px] border-b-[1px] border-inherit">
                              <FontAwesomeIcon icon={faHeart} />
                              <span className="ml-2">Tin đã lưu</span>
                            </a>
                          </Link>
                          <Link href={'/api/auth/signout'}>
                            <a
                              className="flex items-center py-[10px]"
                              onClick={(e) => {
                                e.preventDefault();
                                signOut();
                              }}
                            >
                              <FontAwesomeIcon icon={faRightFromBracket} />
                              <span className="ml-2">Thoát</span>
                            </a>
                          </Link>
                        </div>
                      )}
                    >
                      <button className="h-10 rounded bg-[#3961fb] font-bold text-white inline-flex items-center justify-center px-2.5 ml-1">
                        <span className="mr-1">Quản lý tài khoản</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </button>
                    </Tippy>
                  </div>
                </div>
              )}
              <Link href={'/dangtinmoi'}>
                <a className="hidden lg:inline-flex h-10 rounded bg-[#f73859] font-bold text-white items-center justify-center px-2.5 ml-1">
                  <span className="mr-1">Đăng tin mới</span>
                  <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Navbar key="navbar" />
        <button className="block lg:hidden absolute top-5 right-5 text-white text-2xl" onClick={() => toggleNav()}>
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
