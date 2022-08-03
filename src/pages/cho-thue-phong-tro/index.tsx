/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

type Props = {};

const ChoThuePhongTro = (props: Props) => {
  return (
    <div className="container">
      <div className="p-3 bg-orange-400 my-2 rounded">
        <form action="" className="grid grid-cols-5">
          <div className="">
            <select className="py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <select className="py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <select className="py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <select className="py-[3px] px-[20px] w-[230px] bg-slate-50 rounded-md">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="">
            <button className="py-[3px] px-[20px] w-[230px] bg-blue-800 rounded-md flex">Tìm kiếm</button>
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
        <h1 className="text-4xl font-bold">Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2022</h1>
        <p className="text-base my-2">
          Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất
          năm 2022. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.
        </p>
        <div className="grid grid-cols-3 my-2 m-auto w-[700px]">
          <div className="max-w-[207px] text-center rounded-lg pb-2 shadow-lg shadow-gray-500/50">
            <img
              className="rounded-t-lg pb-2"
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className="font-bold hover:text-red-500">Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
          <div className="max-w-[207px] text-center rounded-lg pb-2 shadow-lg shadow-gray-500/50">
            <img
              className="rounded-t-lg pb-2"
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className="font-bold hover:text-red-500">Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
          <div className="max-w-[207px] text-center rounded-lg pb-2 shadow-lg shadow-gray-500/50">
            <img
              className="rounded-t-lg pb-2"
              src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
              alt=""
            />
            <Link className="" href={''}>
              <a className="font-bold hover:text-red-500">Phòng trọ Hồ Chí Minh</a>
            </Link>
          </div>
        </div>
      </div>
      {/* end news */}
      <div className="p-3 flex h-auto">
        <div className="border-[1px] border-slate-300 rounded-lg flex-1 w-[840px] p-4">
          <div className="main-content-top flex mb-2">
            <div className="flex-1">
              <h4 className="text-3xl mb-2 font-bold">Danh sách tin đăng</h4>
              <div>
                <span>Sắp xếp :</span>
                <Link href={''}>
                  <a className="bg-gray-100 hover:bg-gray-200 p-[2px] rounded-md mx-2">Mặc định</a>
                </Link>
                <Link href={''}>
                  <a className="bg-gray-100 hover:bg-gray-200 p-[2px] rounded-md mx-2">Mới nhất</a>
                </Link>
                <Link href={''}>
                  <a className="bg-gray-100 hover:bg-gray-200 p-[2px] rounded-md mx-2">Có video</a>
                </Link>
              </div>
            </div>
            <div className="flex-1 text-right">
              <span>Cập nhật: 21:00 28/07/2022</span>
            </div>
          </div>
          <hr className="" />
          {/* end main-content-top */}
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4 grid">
              <Link href={''}>
                <a className="">
                  <h3 className="font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400">2.6 triệu/tháng</span>
                <span className="flex-1">20m²</span>
                <Link href={''} className="flex-1">
                  <a className="pr-12">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right">Hôm nay</p>
              </div>
              <p className="text-slate-400">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4 grid">
              <Link href={''}>
                <a className="">
                  <h3 className="font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400">2.6 triệu/tháng</span>
                <span className="flex-1">20m²</span>
                <Link href={''} className="flex-1">
                  <a className="pr-12">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right">Hôm nay</p>
              </div>
              <p className="text-slate-400">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4 grid">
              <Link href={''}>
                <a className="">
                  <h3 className="font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400">2.6 triệu/tháng</span>
                <span className="flex-1">20m²</span>
                <Link href={''} className="flex-1">
                  <a className="pr-12">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right">Hôm nay</p>
              </div>
              <p className="text-slate-400">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4 grid">
              <Link href={''}>
                <a className="">
                  <h3 className="font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400">2.6 triệu/tháng</span>
                <span className="flex-1">20m²</span>
                <Link href={''} className="flex-1">
                  <a className="pr-12">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right">Hôm nay</p>
              </div>
              <p className="text-slate-400">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span>Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
          <div className="main-content flex my-4 max-h-[160px]">
            <div className="flex-2">
              <img
                className="w-[170px] h-[160px] rounded-md"
                src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                alt=""
              />
            </div>
            <div className="flex-1 pl-4 grid">
              <Link href={''}>
                <a className="">
                  <h3 className="font-bold text-blue-500 hover:underline">
                    PHÒNG TIỆN NGHI, GIÁ CẠNH TRANH, CÓ LỬNG, FULL NỘI THẤT GIÁ 2,6 TRIỆU GIẢM 50%
                  </h3>
                </a>
              </Link>
              <div className="flex">
                <span className="flex-1 font-bold text-green-400">2.6 triệu/tháng</span>
                <span className="flex-1">20m²</span>
                <Link href={''} className="flex-1">
                  <a className="pr-12">Vân Canh, Hà Nội</a>
                </Link>
                <p className="flex-1 text-right">Hôm nay</p>
              </div>
              <p className="text-slate-400">
                trệt; có gác lửng, thoáng mát, để xe rộng rãi, Máy giặt, tủ quần áo,giày,bếp nấu ăn riêng, máy lạnh,,có
                camera an ninh và cửa vân tay, phục vụ wifi miễn…
              </p>
              <div className="flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://tse1.mm.bing.net/th?id=OIP.ffvQKn2EInD1VIBo7pwhjgHaHa&pid=Api&P=0"
                  alt=""
                />
                <span className="">Nguyễn Đắc Phương</span>
              </div>
            </div>
          </div>
          {/* end nav */}
          <hr className="" />
        </div>
        {/* end main-content */}
        <div className="flex-2 w-[420px] px-2">
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            <h4 className="text-2xl  font-bold mb-2">Xem theo giá</h4>
            <ul className="px-4 grid grid-rows-4 grid-flow-col">
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4">
            <h4 className="text-2xl  font-bold mb-2">Xem theo diện tích</h4>
            <ul className="px-4 grid grid-rows-3 grid-flow-col">
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Dưới 1 triệu</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4">
            <h4 className="text-2xl  font-bold mb-2">Tin mới đăng</h4>
            <Link href={''} className="px-4">
              <a className="flex py-2">
                <img
                  className="w-[65px] h-[65px] rounded-md  flex-2"
                  src="https://tse1.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&rs=1&c=1&qlt=95&w=207&h=116"
                  alt=""
                />
                <div className="flex-1 pl-2">
                  <p className="text-blue-500">Hỗ trợ cho thuê phòng và tìm phòng theo ý</p>
                  <div className="grid grid-cols-2">
                    <span className=" font-bold text-green-400">4,5 triệu/tháng</span>
                    <span className="text-right">1 giờ trước</span>
                  </div>
                </div>
              </a>
            </Link>
            <hr className="" />
          </div>
          {/* end tin moi dang */}
          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4 h-auto">
            <h4 className="text-2xl  font-bold mb-2">Tin mới đăng</h4>
            <ul className="px-4 grid grid-rows">
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
              <li className="border-b-[1px] border-dotted">
                {`> `}
                <Link className="" href="">
                  <a className="hover:text-red-500">Có nên đầu tư cho thuê căn hộ Azura không?</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4 mt-4 h-auto">
            <h4 className="text-2xl  font-bold mb-2">Có thể bạn quan tâm</h4>
            <ul className="px-4 grid grid-rows">
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
