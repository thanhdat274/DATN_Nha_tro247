import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
export interface INapTienProps {}

export default function NapTien(props: INapTienProps) {
  return (
    <div>
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
          <ul className="flex flex-wrap">
            <li className="text-sky-600">Phongtro123.com</li> <p className="px-1">/</p>
            <li className="text-sky-600">Quản lý</li> <p className="px-1">/</p>
            <li>Nạp tiền</li>
          </ul>
        </p>
      </div>
      <div className="  ">
        <h1 className=" text-2xl lg:text-3xl pb-3">Nạp tiền vào tài khoản </h1>
        <hr />
      </div>
      <div className="sm:flex">
        <div className="sm:w-9/12">
          <div className="">
            <div>
              <div className="bg-green-200 mt-3.5 border-amber-100 py-2.5 px-2.5 rounded-lg leading-9 ">
                <p>
                  Tặng thêm <strong>+ 10%</strong> cho giá trị nạp từ 50.000đ đến dưới 1.000.000đ
                </p>
                <p>
                  Tặng thêm <strong>+ 20%</strong> cho giá trị nạp từ 1.000.000đ đến dưới 2.000.000đ
                </p>
                <p>
                  Tặng thêm <strong>+ 25%</strong> cho giá trị nạp trên 2.000.000đ
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <h2 className="text-2xl">Mời bạn chọn phương thức nạp tiền</h2>

            <div className="pt-7 sm:hidden">
              <ul className="divide-y  border-2">
                <li className=" px-2.5 py-2.5  flex">
                  <Link href="" className="basis-64 basis-2">
                    <a className=" ">
                      <img src="https://phongtro123.com/images/bank-transfer.png" alt="" className="w-16" />
                    </a>
                  </Link>
                  <Link href="" className="basis-32 basis-0">
                    <a className="px-2.5 py-2.5	"> Chuyển khoản</a>
                  </Link>
                </li>
                <li className="  px-2.5 py-2.5  flex">
                  <Link href="" className="basis-64 basis-2">
                    <a className="">
                      <img src="https://phongtro123.com/images/payment-method.svg" alt="" className="w-16" />
                    </a>
                  </Link>
                  <Link href="" className="basis-32 basis-0">
                    <a className="px-2.5 py-2.5	"> Thẻ ATM Interner Banking</a>
                  </Link>
                </li>
                <li className="   px-2.5 py-2.5 flex">
                  <Link href="" className="basis-64 basis-2">
                    <a className="">
                      <img src="https://phongtro123.com/images/credit-card.png" alt="" className="w-16" />
                    </a>
                  </Link>
                  <Link href="" className="basis-32 basis-0">
                    <a className="px-2.5 py-2.5	"> Tín dụng quốc tế</a>
                  </Link>
                </li>
                <li className="   px-2.5 py-2.5 flex">
                  <Link href="" className="basis-64 basis-2">
                    <a className="">
                      <img src="https://phongtro123.com/images/zalopay.png" alt="" className="w-16" />
                    </a>
                  </Link>
                  <Link href="" className="basis-32 basis-0">
                    <a className="px-2.5 py-2.5	"> Zalo pay</a>
                  </Link>
                </li>
                <li className="   px-2.5 py-2.5 flex">
                  <Link href="" className="basis-64 basis-2">
                    <a className="">
                      <img src=" https://phongtro123.com/images/cash.svg" alt="" className="w-16" />
                    </a>
                  </Link>
                  <Link href="" className="basis-32 basis-0">
                    <a className="px-2.5 py-2.5	"> Tiền mặt</a>
                  </Link>
                </li>
                <li className="   px-2.5 py-2.5 flex">
                  <Link href="" className="basis-64 basis-2">
                    <a className="">
                      <img src=" https://phongtro123.com/images/momo.png" alt="" className="w-16" />
                    </a>
                  </Link>
                  <Link href="" className="basis-32 basis-0">
                    <a className="px-2.5 py-2.5	"> Momo</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" grid grid-cols-3 text-center  gap-6  py-7 s:hidden xs:hidden 2xs:hidden 3xs:hidden  ">
              <div className=" border-2 hover:border-x-blue-300 hover:border-y-teal-300  ">
                <div className="mt-7">
                  <Link href="">
                    <a>
                      <img src="https://phongtro123.com/images/momo.png" className="w-20 m-auto" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="bg-slate-100 py-1.5 hover:bg-sky-700 mt-7 font-bold hover:text-white">
                  <Link href="">
                    <a> Momo</a>
                  </Link>
                </div>
              </div>
              <div className=" border-2 hover:border-x-blue-300 hover:border-y-teal-300  ">
                <div className="mt-7">
                  <Link href="">
                    <a>
                      <img src="https://phongtro123.com/images/zalopay.png" className="w-20 m-auto" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="bg-slate-100 py-1.5 hover:bg-sky-700 mt-7 font-bold hover:text-white">
                  <Link href="">
                    <a>Zalo pay</a>
                  </Link>
                </div>
              </div>
              <div className=" border-2 hover:border-x-blue-300 hover:border-y-teal-300  ">
                <div className="mt-7">
                  <Link href="">
                    <a>
                      <img src="https://phongtro123.com/images/cash.svg" className="w-20 m-auto" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="bg-slate-100 py-1.5 hover:bg-sky-700 mt-7 font-bold hover:text-white">
                  <Link href="">
                    <a> Tiền mặt</a>
                  </Link>
                </div>
              </div>
              <div className=" border-2 hover:border-x-blue-300 hover:border-y-teal-300  ">
                <div className="mt-7">
                  <Link href="">
                    <a>
                      <img src="https://phongtro123.com/images/payment-method.svg" className="w-20 m-auto" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="bg-slate-100 py-1.5 hover:bg-sky-700 mt-7 font-bold hover:text-white">
                  <Link href="">
                    <a>ATM banking</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* and reponsive */}
          </div>
        </div>
        <div className="pl-9 mt-3.5 w-3/12 s:hidden xs:hidden 2xs:hidden 3xs:hidden">
          <div className="border-2 px-4 py-4">
            <p className="">Số dư tài khoản</p>
            <p className="text-4xl text-emerald-500">0đ</p>
          </div>
          <div className=" mt-3.5  border-2 py-2.5 px-2.5 bg-slate-500 text-white text-center rounded-md">
            <Link href="">
              <a className=""> Lịch sử nạp tiền</a>
            </Link>
          </div>
          <div className=" mt-3.5  border-2 py-2.5 px-2.5 bg-slate-500 text-white text-center rounded-md">
            <Link href="">
              <a> Lịch sử nạp tiền</a>
            </Link>
          </div>
          <div className=" mt-3.5  border-2 py-2.5 px-2.5 bg-slate-500 text-white text-center rounded-md">
            <Link href="">
              <a> Lịch sử nạp tiền</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
