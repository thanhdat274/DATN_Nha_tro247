import Link from 'next/link';
import React from 'react';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="hidden sm:flex justify-between w-full ">
      <div className="logo my-auto w-14 h-16">logo</div>
      <div className="dangki-dangnhap order-last flex gap-2">
        <div className="text-black my-auto">nhatro24/7.com xin chào!</div>

        <div className="login h-10 w-auto bg-blue-500 my-auto px-2 py-2 rounded text-white">
          <Link className="my-auto" href={'/login'}>
            <a className="my-auto">Đăng nhập</a>
          </Link>
        </div>

        <div className="register h-10 w-auto bg-blue-500 my-auto px-2 py-2 rounded text-white">
          <Link className="my-auto" href={'/register'}>
            <a className="my-auto">Đăng ký</a>
          </Link>
        </div>

        <div className="posts-new h-10 w-auto bg-red-500 my-auto px-2 py-2 rounded text-white">
          <Link className="my-auto" href={'/posts-new'}>
            <a className="my-auto">Đăng tin mới</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
