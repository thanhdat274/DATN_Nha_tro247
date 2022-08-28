/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styles from './cho-thue-phong-tro.module.css';

type Props = {};

const ChoThuePhongTro = (props: Props) => {
  return (
    <div className="container">
      <div className="p-3 bg-orange-400 my-2 rounded">
        <form action="" className="grid grid-cols-5">
          <div className="">
            <select className={`${styles['form-select']} py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <select className={`${styles['form-select']} py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <select className={`${styles['form-select']} py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <select className={`${styles['form-select']} py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className="">
            <button
              className={`${styles['form-select']} m:bg-red-600 s:bg-red-500 2xs:bg-gray-700 py-[3px] px-[20px] w-[230px] bg-blue-800 rounded-md flex text-white`}
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
      {/* end form */}
      <div className="flex text-blue-400">
        <Link href={'/'}>
          <a>Trang Chủ</a>
        </Link>
        {`>`}
        <Link href={''}>
          <a>Cho thuê phòng trọ</a>
        </Link>
      </div>
      <div className="content-top">
        <h1 className="text-4xl font-bold md:text-1xl sm:text-xs">
          Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2022
        </h1>
        <p className="text-base my-2">
          Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất
          năm 2022. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.
        </p>
        <div className="grid grid-cols-3 my-2 m-auto w-[700px] sm:w-[550px] sm:gap-4">
          <div className="max-w-[207px] text-center rounded-lg pb-2 sm:pb-0 shadow-lg shadow-gray-500/50">
            <img
              className="rounded-t-lg pb-2"
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className="font-bold hover:text-red-500 sm:text-sm">Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
          <div className="max-w-[207px] text-center rounded-lg pb-2 shadow-lg shadow-gray-500/50">
            <img
              className="rounded-t-lg pb-2"
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className="font-bold hover:text-red-500  sm:text-sm">Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
          <div className="max-w-[207px] text-center rounded-lg pb-2 shadow-lg shadow-gray-500/50">
            <img
              className="rounded-t-lg pb-2"
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className="font-bold hover:text-red-500 sm:text-sm">Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
        </div>
      </div>
      {/* end news */}
      <div className="p-3 flex h-auto">
        <div className="sm:flex-1 sm:w-[380px] md:flex-1 md:w-[400px] lg:flex-1 lg:w-[800px] border-[1px] border-slate-300 rounded-lg flex-1 w-[840px] p-4">
          <div className="main-content-top flex mb-2">
            <div className="flex-1">
              <h4 className="lg:text-2xl md:text-base sm:text-sm text-3xl mb-2 font-bold">Danh sách tin đăng</h4>
              <div className="">
                <span className="lg:text-lg md:text-sm sm:text-xs">Sắp xếp :</span>
                <Link href={''}>
                  <a className=" md:text-sm sm:text-xs bg-gray-100 hover:bg-gray-200 p-[2px] rounded-md mx-2">
                    Mặc định
                  </a>
                </Link>
                <Link href={''}>
                  <a className=" lg:text-lg md:text-sm sm:text-xs bg-gray-100 hover:bg-gray-200 p-[2px] rounded-md mx-2">
                    Mới nhất
                  </a>
                </Link>
                <Link href={''}>
                  <a className="lg:text-lg md:text-sm sm:text-xs bg-gray-100 hover:bg-gray-200 p-[2px] rounded-md mx-2">
                    Có video
                  </a>
                </Link>
              </div>
            </div>
            <div className="lg:text-lg md:text-sm sm:text-xs flex-1 text-right">
              <span>Cập nhật: 21:00 28/07/2022</span>
            </div>
          </div>
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[95px]"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4">
              <Link href={''}>
                <a className="">
                  <h3 className="lg:text-sm md:text-sm sm:text-xs font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400 md:text-xs sm:text-[10px] ">2.6 triệu/tháng</span>
                <span className="flex-1 md:text-sm sm:text-[10px] ">20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className="pr-12  md:text-xs sm:text-[10px]">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right md:text-xs sm:text-[10px] ">Hôm nay</p>
              </div>
              <p className="text-slate-400 md:text-xs sm:text-[10px]">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex md:text-xs sm:text-[10px]">
                <img
                  className="w-8 h-8 rounded-full  lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] sm:w-[10px] sm:h-[10px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
        </div>
        {/* end main-content */}
        <div className="sm:flex-2 sm:w-[180px] md:flex-2 md:w-[220px] lg:flex-2 lg:w-[300px] flex-2 w-[420px] px-2">
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            <h4 className="text-2xl  font-bold mb-2 lg:text-lg md:text-base sm:text-sm">Xem theo giá</h4>
            <ul className="px-4 grid grid-rows-4 grid-flow-col lg:px-2 md:px-1 sm:px-0 ">
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted  lg:text-base md:text-[11px] sm:text-[8px]">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* /// */}
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            <h4 className="text-2xl  font-bold mb-2 lg:text-lg md:text-base sm:text-sm">Xem theo diện tích</h4>
            <ul className="px-4 grid grid-rows-3 grid-flow-col lg:px-2 md:px-1 sm:px-0  lg:text-base md:text-[11px] sm:text-[8px]">
              <li className="border-b-[1px] border-dotted ">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted ">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted ">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 20 m 2</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* /// */}

          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4">
            <h4 className="text-2xl  font-bold mb-2  lg:text-lg md:text-base sm:text-sm">Tin mới đăng</h4>
            <Link href={''} className="px-4">
              <a className="flex py-2">
                <img
                  className="w-[65px] h-[65px] rounded-md  flex-2 lg:w-[50px] lg:h-[50px] sm:w-[30px] md:h-[40px] md:w-[40px] sm:h-[30px]"
                  src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                  alt=""
                />
                <div className="flex-1 pl-2">
                  <p className="text-blue-500  lg:text-base md:text-[11px] sm:text-[8px]">
                    Hỗ trợ cho thuê phòng và tìm phòng theo ý
                  </p>
                  <div className="grid grid-cols-2">
                    <span className=" font-bold text-green-400  lg:text-base md:text-[11px] sm:text-[8px]">
                      4,5 triệu/tháng
                    </span>
                    <span className="text-right  lg:text-base md:text-[11px] sm:text-[8px]">1 giờ trước</span>
                  </div>
                </div>
              </a>
            </Link>
            <hr className="" />
          </div>
          {/* end tin moi dang */}
          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4 h-auto">
            <h4 className="text-2xl  font-bold mb-2  lg:text-lg md:text-base sm:text-sm">Tin mới đăng</h4>
            <ul className="px-4 grid grid-rows   lg:text-base md:text-[11px] sm:text-[8px]">
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500 ">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4 h-auto">
            <h4 className="text-2xl  font-bold mb-2  lg:text-lg md:text-base sm:text-sm">Có thể bạn quan tâm</h4>
            <ul className="px-4 grid grid-rows  lg:text-base md:text-[11px] sm:text-[8px]">
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* end sidebar */}
      </div>
      {/* end main */}
    </div>
  );
};

export default ChoThuePhongTro;
