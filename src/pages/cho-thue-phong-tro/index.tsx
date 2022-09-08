/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styles from './cho-thue-phong-tro.module.css';

type Props = {};

const ChoThuePhongTro = (props: Props) => {
  return (
    <div className="container m-auto w-full">
      <div className="p-3 bg-orange-400 my-2 rounded ">
        <form
          action=""
          className={`${styles['form-action']} 2xs:gird 2xs:grid-rows  xs:gird xs:grid-rows s:grid s:grid-cols-5 s:gap-2 s:w-auto sm:grid sm:grid-cols-5 sm:gap-2 sm:w-auto `}
        >
          <div className="text-center">
            <select className={`${styles['form-select']}`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="text-center">
            <select className={`${styles['form-select']}`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="text-center">
            <select className={`${styles['form-select']}`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="text-center">
            <select className={`${styles['form-select']}`}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className="text-center">
            <button className={`${styles['form-button']} `}>Tìm kiếm</button>
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
      <div className="content-top xl:ml-12">
        <h1 className="text-5xl font-bold 2xs:text-xl xs:text-xl s:text-2xl">
          Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2022
        </h1>
        <p className="text-lg my-2  2xs:text-base xs:text-base s:text-lg">
          Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất
          năm 2022. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.
        </p>
        <div className={`${styles['content']} w-5/6 grid grid-cols-3 gap-4 m-auto`}>
          <div className={`${styles['nav-content']}`}>
            <img
              className={`${styles['content-img']}`}
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className={`${styles['content-link']}`}>Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
          <div className={`${styles['nav-content']}`}>
            <img
              className={`${styles['content-img']}`}
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className={`${styles['content-link']}`}>Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
          <div className={`${styles['nav-content']}`}>
            <img
              className={`${styles['content-img']}`}
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className={`${styles['content-link']}`}>Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
        </div>
      </div>
      {/* end news */}
      <section className="p-3 2xs:[1px] 2xs:grid 2xs:grid-rows xs:grid xs:grid-rows s:grid s:grid-rows sm:flex h-auto">
        <div className={`${styles['main-content-left']}`}>
          <div className="main-content-top flex mb-2">
            <div className="flex-2">
              <h4 className={`${styles['h4-main-top']}`}>Danh sách tin đăng</h4>
              <div className="flex">
                <span className={`${styles['span-main-top']}`}>Sắp xếp :</span>
                <Link href={''}>
                  <a className={`${styles['content-main-link']}`}>Mặc định</a>
                </Link>
                <Link href={''}>
                  <a className={`${styles['content-main-link']}`}>Mới nhất</a>
                </Link>
                <Link href={''}>
                  <a className={`${styles['content-main-link']}`}>Có video</a>
                </Link>
              </div>
            </div>
            <div className={`${styles['content-main-right']}`}>
              <span className="text-left">Cập nhật:</span>
              <br />
              <span>28/07/2022</span>
            </div>
          </div>
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span className="">Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span className="">Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span className="">Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
          <div className="main-content flex my-4">
            <div className="flex-2">
              <img
                className={`${styles['content-main-img-left']}`}
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 p-[4px] 2xs:max-w-[220px]">
              <Link href={''}>
                <a className="">
                  <h3 className={`${styles['content-main-h3']}`}>
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex 2xs:text-[8px] xs:text-[10px] s:text-sm">
                <span className={`${styles['content-private1']}`}>2.6 triệu/tháng</span>
                <span className={`${styles['content-private2']}`}>20m²</span>
                <Link href={''} className="flex-1 ">
                  <a className={`${styles['content-private3']}`}>Vân Canh, Hà Nội</a>
                </Link>
                <p className={`${styles['content-private4']}`}>Hôm nay</p>
              </div>
              <p className={`${styles['content-private5']}`}>
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className={`${styles['content-private6']}`}>
                <img
                  className={`${styles['content-private6-img']}`}
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span className="">Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          <hr className="" />
          {/* end nav */}
        </div>
        {/* end main-content */}
        <div className="sm:flex-2 sm:w-[180px] md:flex-2 md:w-[220px] lg:flex-2 lg:w-[300px]  px-2 2xs:w-[345px]   xs:w-full s:w-full 2xs:mt-[4px]  xs:mt-[4px] s:mt-[4px]">
          {/* main content 2 */}
          <div className={`${styles['nav-right']} 2xs:hidden xs:hidden s:hidden`}>
            <h4 className={`${styles['nav-right-h4']}`}>Xem theo giá</h4>
            <ul className={`${styles['nav-right-ul1']}`}>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
              <li className={`${styles['nav-right-li1']}`}>
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 1 triệu</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* /// */}
          <div className={`${styles['nav-right']} 2xs:hidden xs:hidden s:hidden`}>
            <h4 className={`${styles['nav-right-h4']}`}>Xem theo diện tích</h4>
            <ul className={`${styles['nav-right-ul2']}`}>
              <li className="border-b-[1px] border-dotted ">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted ">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted ">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 20 m 2</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Dưới 20 m 2</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* /// */}

          <div className={`${styles['nav-right']}`}>
            <h4 className={`${styles['nav-right-h4']} `}>Tin mới đăng</h4>
            <Link href={''} className="px-4">
              <a className="flex py-2">
                <img
                  className={`${styles['nav-right-image']} flex-2`}
                  src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                  alt=""
                />
                <div className="flex-1 pl-2">
                  <p className={`${styles['nav-right-private1']}`}>Hỗ trợ cho thuê phòng và tìm phòng theo ý</p>
                  <div className="grid grid-cols-2">
                    <span className={`${styles['nav-right-private2']}`}>4,5 triệu/tháng</span>
                    <span className={`${styles['nav-right-private3']}`}>1 giờ trước</span>
                  </div>
                </div>
              </a>
            </Link>
            <hr className="" />
          </div>
          {/* end tin moi dang */}
          <div className={`${styles['nav-right']}`}>
            <h4 className={`${styles['nav-right-h4']}`}>Tin mới đăng</h4>
            <ul className="px-4 grid grid-rows   lg:text-base md:text-[11px] sm:text-[8px]">
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className="hover:text-red-500 ">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles['nav-right']}`}>
            <h4 className={`${styles['nav-right-h4']}`}>Có thể bạn quan tâm</h4>
            <ul className="px-4 grid grid-rows  lg:text-base md:text-[11px] sm:text-[8px]">
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                <span className="2xs:text-[6px] xs:text-[10px] s:text-xs">{`> `}</span>
                <Link className="" href="">
                  <a className={`${styles['nav-right-link-a']}`}>Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* end sidebar */}
      </section>
      {/* end main */}
    </div>
  );
};

export default ChoThuePhongTro;
