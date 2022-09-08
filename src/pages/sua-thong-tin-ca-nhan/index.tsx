import WhyChose from '@/components/WhyChose';
import Link from 'next/link';
import * as React from 'react';

export interface ISuaProps {}

export default function Sua(props: ISuaProps) {
  return (
    <div className=" md:mx-10">
      <div className="bg-amber-100 border-amber-100 py-2.5 px-2.5 rounded-lg sm:hidden">
        <p>
          Xin chào <strong>Nguyễn Đắc Trọng</strong> . Mã tài khoản : <strong>12345</strong>
        </p>
        <p>
          Số dư tài khoản: <strong>0đ</strong>
        </p>
      </div>
      <div className="  sm:border-2  sm:my-3.5 sm:rounded-md   sm:bg-slate-100 ">
        <p className="   mx-3 my-3">
          {/* <span>Phongtro123.com</span>/ <span>Quản lý</span>/ <span>Cập nhật thông tin cá nhân</span> */}
          <ul className="flex flex-wrap">
            <li className="text-sky-600">Phongtro123.com</li> <p className="px-1">/</p>
            <li className="text-sky-600">Quản lý</li> <p className="px-1">/</p>
            <li>Cập nhật thông tin cá nhân</li>
          </ul>
        </p>
      </div>
      <div className=" ">
        <h1 className=" text-2xl lg:text-3xl pb-3">Cập nhật thông tin cá nhân</h1>
        <hr />
      </div>
      <div className="w-full m-auto pt-8">
        <form className="w-full justify-center">
          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Mã thành viên
              </label>
            </div>
            <div className=" w-full">
              <input
                className="bg-gray-200   border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
                defaultValue="1323"
              />
            </div>
          </div>
          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Số điện thoại
              </label>
            </div>
            <div className=" w-full">
              <input
                className="bg-gray-200   border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
                defaultValue="0989898989"
              />
              <p className="pt-px mt-2.5 mb-8 text-sky-600    ">
                <Link href="">
                  <a className="hover:text-teal-900">Đổi số điện thoại</a>
                </Link>
              </p>
            </div>
          </div>

          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Tên hiển thị
              </label>
            </div>
            <div className=" w-full">
              <input
                className="  border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Email
              </label>
            </div>
            <div className=" w-full">
              <input
                className="   border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Số Zalo
              </label>
            </div>
            <div className=" w-full">
              <input
                className="   border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Mã thành viên
              </label>
            </div>
            <div className=" w-full">
              <input
                className="   border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div className=" sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36 ">
              <label className="  " htmlFor="inline-full-name">
                Facebook
              </label>
            </div>
            <div className=" w-full">
              <input
                className="  border-2 border-gray-200 rounded w-full py-2 px-4   "
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div className="sm:flex sm:w-9/12 m-auto   mb-6">
            <div className="mt-2 basis-36 ">
              <label className=" " htmlFor="inline-full-name">
                Mật khẩu
              </label>
            </div>
            <div className="">
              <p className="   text-sky-600">
                <Link href="">
                  <a>Đổi mật khẩu</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-9/12 m-auto   mb-6">
            <div className=" mt-2 basis-36">
              <label className=" " htmlFor="inline-full-name">
                Ảnh
              </label>
            </div>
            <div className="w-full">
              <div className="mb-4">
                <img
                  src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                  className="w-1/5 h-auto rounded-full"
                  alt=""
                />
              </div>
              <div className="pl-6">
                {' '}
                <button className="border-2 rounded-md bg-slate-100 my-2 px-8 py-1">Chọn ảnh</button>
              </div>
            </div>
          </div>

          <div className="w-9/12 m-auto">
            <div className=" rounded-xl bg-blue-600 text-white text-center py-2 ">
              <button className="   " type="button">
                Lưu & cập nhật
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="WhyChose w-full py-2"></div>
    </div>
  );
}
