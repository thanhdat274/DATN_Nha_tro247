import WhyChose from '@/components/WhyChose';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface ISuaProps {}

export default function Sua(props: ISuaProps) {
  return (
    <div className="main">
      <div className="breadcrumb bg-[#e9ecef] px-[1rem] py-[0.75rem] rounded-[0.25rem] mb-[1rem]">
        <Link href="/">
          <a className="text-[#007bff] hover:underline hover:text-[#0056b3] pr-1">Trang chủ</a>
        </Link>
        /
        <Link href="/">
          <a className="text-[#007bff] hover:underline hover:text-[#0056b3] px-1">Quản lý</a>
        </Link>
        /<span className="pl-1">Cập nhật thông tin cá nhân</span>
      </div>
      <h2 className="text-2xl border-b pb-1 mb-8">Cập nhật thông tin cá nhân</h2>
      <div className="form-contact w-1/2 mx-auto">
        <form>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Mã thành viên
            </label>
            <input
              type="text"
              value="134567"
              className="w-2/3 border bg-[#e9ecef] border-[#ced4da] px-[0.75rem] py-[0.375rem] rounded-[0.25rem] focus:border-[#80bdff] focus:shadow-[#007bff40]"
              disabled
            />
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Số điện thoại
            </label>
            <div className="w-2/3">
              <input
                type="text"
                value="021354965"
                className="w-full border bg-[#e9ecef] border-[#ced4da] px-[0.75rem] py-[0.375rem] rounded-[0.25rem] focus:border-[#80bdff] focus:shadow-[#007bff40] focus:outline-none"
                disabled
              />
              <Link href="/">
                <a className="block text-[#007bff] mt-2">Đổi số điện thoại</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Tên hiển thị
            </label>
            <input
              type="text"
              value="Name"
              className="w-2/3 border border-[#ced4da] px-[0.75rem] py-[0.375rem] rounded-[0.25rem] focus:border-[#80bdff] focus:shadow-[#007bff40] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Email
            </label>
            <input
              type="text"
              className="w-2/3 border border-[#ced4da] px-[0.75rem] py-[0.375rem] rounded-[0.25rem] focus:border-[#80bdff] focus:shadow-[#007bff40] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Số Zalo
            </label>
            <input
              type="text"
              value="03215675"
              className="w-2/3 border border-[#ced4da] px-[0.75rem] py-[0.375rem] rounded-[0.25rem] focus:border-[#80bdff] focus:shadow-[#007bff40] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Facebook
            </label>
            <input
              type="text"
              className="w-2/3 border border-[#ced4da] px-[0.75rem] py-[0.375rem] rounded-[0.25rem] focus:border-[#80bdff] focus:shadow-[#007bff40] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Mật khấu
            </label>
            <Link href="">
              <a className="text-[#007bff]">Đổi mật khẩu</a>
            </Link>
          </div>
          <div className="flex flex-wrap mb-5">
            <label htmlFor="" className="w-1/3">
              Ảnh đại diện
            </label>
            <div className="">
              <Image
                width={140}
                height={140}
                src={'https://freeimage.host/content/images/system/logo_homepage_1577917990964_282d1e.webp'}
                alt={'image'}
                className="rounded-full"
              />
              <input type="file" className="block" multiple />
            </div>
          </div>
          <button className="bg-[#007bff] text-white w-full px-[1rem] py-[0.5rem] rounded-md">Lưu và cập nhật</button>
        </form>
      </div>
    </div>
  );
}
