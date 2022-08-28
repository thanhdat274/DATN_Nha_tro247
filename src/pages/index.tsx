import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faLocationDot,
  faMaximize,
  faVideo,
  faHeart,
  faUsers,
  faNewspaper,
  faElevator,
  faStreetView,
} from '@fortawesome/free-solid-svg-icons';
import ContactUs from '@/components/ContactUs';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();
  const dataGG = data as any;
  console.log('token', dataGG?.token);

  return (
    <div>
      <div className="bg-[url(/images/bg-header.jpg)] bg-center bg-repeat bg-cover w-full h-full relative">
        <div className="bg-transparent bg-gradient-to-b from-[#053A63] to-[#01111B] opacity-75 w-full h-full absolute"></div>
        <div className="flex flex-col justify-center items-center relative mx-4 lg:mx-auto py-36 h-full min-h-0 lg:min-h-[700px] max-w-5xl">
          <div className="flex flex-col text-white text-center px-6 z-10">
            <h2 className="text-3xl lg:text-5xl font-bold">Kênh thông tin Phòng Trọ số 1 Việt Nam</h2>
            <p className="text-base lg:text-lg pt-5">
              Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở
              ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
            </p>
          </div>
          <div className="bg-white rounded w-full shadow-[0_0_15px_1px_#0798ff40] absolute -bottom-[300px] lg:-bottom-[50px] z-10">
            <div className="flex flex-col lg:flex-row p-6">
              <div className="flex flex-col max-w-full lg:max-w-[20%] w-full px-1 py-1 lg:py-0">
                <label className="mt-1">Danh mục</label>
                <input
                  type="text"
                  className="border border-[#eee] p-2 rounded outline-none"
                  value="Phòng trọ, nhà trọ"
                />
              </div>
              <div className="flex flex-col max-w-full lg:max-w-[20%] w-full px-1 py-1 lg:py-0">
                <label className="mt-1">Địa chỉ</label>
                <input type="text" className="border border-[#eee] p-2 rounded outline-none" value="Toàn quốc" />
              </div>
              <div className="flex flex-col max-w-full lg:max-w-[20%] w-full px-1 py-1 lg:py-0">
                <label className="mt-1">Giá</label>
                <input type="text" className="border border-[#eee] p-2 rounded outline-none" value="Chọn giá" />
              </div>
              <div className="flex flex-col max-w-full lg:max-w-[20%] w-full px-1 py-1 lg:py-0">
                <label className="mt-1">Diện tích</label>
                <input type="text" className="border border-[#eee] p-2 rounded outline-none" value="Chọn diện tích" />
              </div>
              <div className="flex flex-col max-w-full lg:max-w-[20%] w-full px-1 py-1 lg:py-0 justify-end">
                <button className="flex justify-center items-center py-2 text-white border border-[#0073E1] rounded w-full hbg">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="pt-96 lg:pt-32 pb-12 lg:pb-20">
          <h2 className="text-center text-4xl font-bold tracking-tight">Danh sách tin đăng</h2>
          <div className="flex flex-col md:flex-row justify-center mt-5">
            <button className="bg-[#f3f3f3] text-[#333] px-[15px] py-[3px] mx-0 lg:mx-4 my-2 lg:my-0 font-bold rounded hover:text-white hover:bg-[#0073e1] hover:transition-all">
              Mặc định
            </button>
            <button className="bg-[#f3f3f3] text-[#333] px-[15px] py-[3px] mx-0 lg:mx-4 my-2 lg:my-0 font-bold rounded hover:text-white hover:bg-[#0073e1] hover:transition-all">
              Mới nhất
            </button>
            <button className="bg-[#f3f3f3] text-[#333] px-[15px] py-[3px] mx-0 lg:mx-4 my-2 lg:my-0 font-bold rounded hover:text-white hover:bg-[#0073e1] hover:transition-all">
              Có video
            </button>
          </div>
          <div className="flex flex-wrap flex-row min-w-full mt-7 lg:mt-10">
            <div className="shadow-[0_0_15px_1px_#0798ff40] w-full max-w-full md:max-w-[45%] lg:max-w-[30%] mx-0 md:mx-[2.5%] lg:mx-[1.667%] mb-5 lg:mb-10">
              <div className="relative w-full h-full border border-[#f1f8ff] bg-white min-w-[30%] transition-all">
                <div className="relative overflow-hidden w-full h-[240px]">
                  <div className="absolute w-full h-full bottom-0 z-10">
                    <div className="flex items-center absolute bottom-2 right-5 text-white text-md">
                      <span className="flex px-2">
                        <FontAwesomeIcon icon={faVideo} />
                      </span>
                      <span className="flex items-center px-2">
                        <FontAwesomeIcon icon={faCamera} />
                        <span className="leading-none px-1">5</span>
                      </span>
                    </div>
                    <div className="flex items-center absolute bottom-2 left-5 text-white text-md">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="leading-none px-1">Quận Tân Bình, Hồ Chí Minh</span>
                    </div>
                    <div className="text-white bg-[#dd3333] w-fit px-2 py-[2px] opacity-95 absolute top-2 left-5 text-sm">
                      Thuê nhanh
                    </div>
                  </div>
                  <Link href={'/'}>
                    <a className="relative block w-full h-full">
                      <Image src="/images/house.jpg" alt="image" layout="fill" priority />
                    </a>
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="/">
                    <a className="text-lg font-bold hover:text-[#0073e1] transition-all">
                      Phòng trọ 25m2, full nội thất, Tân Bình
                    </a>
                  </Link>
                  <div className="text-[#0073e1] text-base font-bold">3.9 triệu/tháng</div>
                  <div className="py-3 max-h-[100px] break-normal overflow-hidden">
                    1. Vị trí:- Địa chỉ: Mặt tiền số 18 Nguyễn Minh Hoàng, P.12; Q. Tân bình, khu K 300 Cộng Hòa- Vị
                    trí: Rất thuận tiện cho việc đi lại, gần chợ Hoàng Hoa…
                  </div>
                  <div className="flex items-center text-lg">
                    <FontAwesomeIcon icon={faMaximize} />
                    <span className="leading-none text-base px-1">25m2</span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px] mr-2"
                    >
                      Gọi điện
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px]"
                    >
                      Nhắn Zalo
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <div className="flex items-center">
                      <div className="relative rounded-full w-8 h-8 overflow-hidden">
                        <Image src="/images/8af8aef002a48db660e44d34fd1abe24.jpeg" alt="user" layout="fill" priority />
                      </div>
                      <div className="font-semibold leading-none px-2">Vu Thi Phuong</div>
                    </div>
                    <div className="hover:text-[#f73859] text-xl">
                      <Tippy content="Lưu" animation="fade" arrow={true}>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0_0_15px_1px_#0798ff40] w-full max-w-full md:max-w-[45%] lg:max-w-[30%] mx-0 md:mx-[2.5%] lg:mx-[1.667%] mb-5 lg:mb-10">
              <div className="relative w-full h-full border border-[#f1f8ff] bg-white min-w-[30%] transition-all">
                <div className="relative overflow-hidden w-full h-[240px]">
                  <div className="absolute w-full h-full bottom-0 z-10">
                    <div className="flex items-center absolute bottom-2 right-5 text-white text-md">
                      <span className="flex px-2">
                        <FontAwesomeIcon icon={faVideo} />
                      </span>
                      <span className="flex items-center px-2">
                        <FontAwesomeIcon icon={faCamera} />
                        <span className="leading-none px-1">5</span>
                      </span>
                    </div>
                    <div className="flex items-center absolute bottom-2 left-5 text-white text-md">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="leading-none px-1">Quận Tân Bình, Hồ Chí Minh</span>
                    </div>
                    <div className="text-white bg-[#dd3333] w-fit px-2 py-[2px] opacity-95 absolute top-2 left-5 text-sm">
                      Thuê nhanh
                    </div>
                  </div>
                  <Link href={'/'}>
                    <a className="relative block w-full h-full">
                      <Image src="/images/house.jpg" alt="image" layout="fill" priority />
                    </a>
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="/">
                    <a className="text-lg font-bold hover:text-[#0073e1] transition-all">
                      Phòng trọ 25m2, full nội thất, Tân Bình
                    </a>
                  </Link>
                  <div className="text-[#0073e1] text-base font-bold">3.9 triệu/tháng</div>
                  <div className="py-3 max-h-[100px] break-normal overflow-hidden">
                    1. Vị trí:- Địa chỉ: Mặt tiền số 18 Nguyễn Minh Hoàng, P.12; Q. Tân bình, khu K 300 Cộng Hòa- Vị
                    trí: Rất thuận tiện cho việc đi lại, gần chợ Hoàng Hoa…
                  </div>
                  <div className="flex items-center text-lg">
                    <FontAwesomeIcon icon={faMaximize} />
                    <span className="leading-none text-base px-1">25m2</span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px] mr-2"
                    >
                      Gọi điện
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px]"
                    >
                      Nhắn Zalo
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <div className="flex items-center">
                      <div className="relative rounded-full w-8 h-8 overflow-hidden">
                        <Image src="/images/8af8aef002a48db660e44d34fd1abe24.jpeg" alt="user" layout="fill" priority />
                      </div>
                      <div className="font-semibold leading-none px-2">Vu Thi Phuong</div>
                    </div>
                    <div className="hover:text-[#f73859] text-xl">
                      <Tippy content="Lưu" animation="fade" arrow={true}>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0_0_15px_1px_#0798ff40] w-full max-w-full md:max-w-[45%] lg:max-w-[30%] mx-0 md:mx-[2.5%] lg:mx-[1.667%] mb-5 lg:mb-10">
              <div className="relative w-full h-full border border-[#f1f8ff] bg-white min-w-[30%] transition-all">
                <div className="relative overflow-hidden w-full h-[240px]">
                  <div className="absolute w-full h-full bottom-0 z-10">
                    <div className="flex items-center absolute bottom-2 right-5 text-white text-md">
                      <span className="flex px-2">
                        <FontAwesomeIcon icon={faVideo} />
                      </span>
                      <span className="flex items-center px-2">
                        <FontAwesomeIcon icon={faCamera} />
                        <span className="leading-none px-1">5</span>
                      </span>
                    </div>
                    <div className="flex items-center absolute bottom-2 left-5 text-white text-md">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="leading-none px-1">Quận Tân Bình, Hồ Chí Minh</span>
                    </div>
                    <div className="text-white bg-[#dd3333] w-fit px-2 py-[2px] opacity-95 absolute top-2 left-5 text-sm">
                      Thuê nhanh
                    </div>
                  </div>
                  <Link href={'/'}>
                    <a className="relative block w-full h-full">
                      <Image src="/images/house.jpg" alt="image" layout="fill" priority />
                    </a>
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="/">
                    <a className="text-lg font-bold hover:text-[#0073e1] transition-all">
                      Phòng trọ 25m2, full nội thất, Tân Bình
                    </a>
                  </Link>
                  <div className="text-[#0073e1] text-base font-bold">3.9 triệu/tháng</div>
                  <div className="py-3 max-h-[100px] break-normal overflow-hidden">
                    1. Vị trí:- Địa chỉ: Mặt tiền số 18 Nguyễn Minh Hoàng, P.12; Q. Tân bình, khu K 300 Cộng Hòa- Vị
                    trí: Rất thuận tiện cho việc đi lại, gần chợ Hoàng Hoa…
                  </div>
                  <div className="flex items-center text-lg">
                    <FontAwesomeIcon icon={faMaximize} />
                    <span className="leading-none text-base px-1">25m2</span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px] mr-2"
                    >
                      Gọi điện
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px]"
                    >
                      Nhắn Zalo
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <div className="flex items-center">
                      <div className="relative rounded-full w-8 h-8 overflow-hidden">
                        <Image src="/images/8af8aef002a48db660e44d34fd1abe24.jpeg" alt="user" layout="fill" priority />
                      </div>
                      <div className="font-semibold leading-none px-2">Vu Thi Phuong</div>
                    </div>
                    <div className="hover:text-[#f73859] text-xl">
                      <Tippy content="Lưu" animation="fade" arrow={true}>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0_0_15px_1px_#0798ff40] w-full max-w-full md:max-w-[45%] lg:max-w-[30%] mx-0 md:mx-[2.5%] lg:mx-[1.667%] mb-5 lg:mb-10">
              <div className="relative w-full h-full border border-[#f1f8ff] bg-white min-w-[30%] transition-all">
                <div className="relative overflow-hidden w-full h-[240px]">
                  <div className="absolute w-full h-full bottom-0 z-10">
                    <div className="flex items-center absolute bottom-2 right-5 text-white text-md">
                      <span className="flex px-2">
                        <FontAwesomeIcon icon={faVideo} />
                      </span>
                      <span className="flex items-center px-2">
                        <FontAwesomeIcon icon={faCamera} />
                        <span className="leading-none px-1">5</span>
                      </span>
                    </div>
                    <div className="flex items-center absolute bottom-2 left-5 text-white text-md">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="leading-none px-1">Quận Tân Bình, Hồ Chí Minh</span>
                    </div>
                    <div className="text-white bg-[#dd3333] w-fit px-2 py-[2px] opacity-95 absolute top-2 left-5 text-sm">
                      Thuê nhanh
                    </div>
                  </div>
                  <Link href={'/'}>
                    <a className="relative block w-full h-full">
                      <Image src="/images/house.jpg" alt="image" layout="fill" priority />
                    </a>
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="/">
                    <a className="text-lg font-bold hover:text-[#0073e1] transition-all">
                      Phòng trọ 25m2, full nội thất, Tân Bình
                    </a>
                  </Link>
                  <div className="text-[#0073e1] text-base font-bold">3.9 triệu/tháng</div>
                  <div className="py-3 max-h-[100px] break-normal overflow-hidden">
                    1. Vị trí:- Địa chỉ: Mặt tiền số 18 Nguyễn Minh Hoàng, P.12; Q. Tân bình, khu K 300 Cộng Hòa- Vị
                    trí: Rất thuận tiện cho việc đi lại, gần chợ Hoàng Hoa…
                  </div>
                  <div className="flex items-center text-lg">
                    <FontAwesomeIcon icon={faMaximize} />
                    <span className="leading-none text-base px-1">25m2</span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px] mr-2"
                    >
                      Gọi điện
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px]"
                    >
                      Nhắn Zalo
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <div className="flex items-center">
                      <div className="relative rounded-full w-8 h-8 overflow-hidden">
                        <Image src="/images/8af8aef002a48db660e44d34fd1abe24.jpeg" alt="user" layout="fill" priority />
                      </div>
                      <div className="font-semibold leading-none px-2">Vu Thi Phuong</div>
                    </div>
                    <div className="hover:text-[#f73859] text-xl">
                      <Tippy content="Lưu" animation="fade" arrow={true}>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0_0_15px_1px_#0798ff40] w-full max-w-full md:max-w-[45%] lg:max-w-[30%] mx-0 md:mx-[2.5%] lg:mx-[1.667%] mb-5 lg:mb-10">
              <div className="relative w-full h-full border border-[#f1f8ff] bg-white min-w-[30%] transition-all">
                <div className="relative overflow-hidden w-full h-[240px]">
                  <div className="absolute w-full h-full bottom-0 z-10">
                    <div className="flex items-center absolute bottom-2 right-5 text-white text-md">
                      <span className="flex px-2">
                        <FontAwesomeIcon icon={faVideo} />
                      </span>
                      <span className="flex items-center px-2">
                        <FontAwesomeIcon icon={faCamera} />
                        <span className="leading-none px-1">5</span>
                      </span>
                    </div>
                    <div className="flex items-center absolute bottom-2 left-5 text-white text-md">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="leading-none px-1">Quận Tân Bình, Hồ Chí Minh</span>
                    </div>
                    <div className="text-white bg-[#dd3333] w-fit px-2 py-[2px] opacity-95 absolute top-2 left-5 text-sm">
                      Thuê nhanh
                    </div>
                  </div>
                  <Link href={'/'}>
                    <a className="relative block w-full h-full">
                      <Image src="/images/house.jpg" alt="image" layout="fill" priority />
                    </a>
                  </Link>
                </div>
                <div className="p-5">
                  <Link href="/">
                    <a className="text-lg font-bold hover:text-[#0073e1] transition-all">
                      Phòng trọ 25m2, full nội thất, Tân Bình
                    </a>
                  </Link>
                  <div className="text-[#0073e1] text-base font-bold">3.9 triệu/tháng</div>
                  <div className="py-3 max-h-[100px] break-normal overflow-hidden">
                    1. Vị trí:- Địa chỉ: Mặt tiền số 18 Nguyễn Minh Hoàng, P.12; Q. Tân bình, khu K 300 Cộng Hòa- Vị
                    trí: Rất thuận tiện cho việc đi lại, gần chợ Hoàng Hoa…
                  </div>
                  <div className="flex items-center text-lg">
                    <FontAwesomeIcon icon={faMaximize} />
                    <span className="leading-none text-base px-1">25m2</span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px] mr-2"
                    >
                      Gọi điện
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center text-white bg-[#0073e1] rounded px-2 py-[2px] min-w-[85px]"
                    >
                      Nhắn Zalo
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <div className="flex items-center">
                      <div className="relative rounded-full w-8 h-8 overflow-hidden">
                        <Image src="/images/8af8aef002a48db660e44d34fd1abe24.jpeg" alt="user" layout="fill" priority />
                      </div>
                      <div className="font-semibold leading-none px-2">Vu Thi Phuong</div>
                    </div>
                    <div className="hover:text-[#f73859] text-xl">
                      <Tippy content="Lưu" animation="fade" arrow={true}>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="flex items-center justify-center min-w-[30px] min-h-[30px] border border-inherit rounded mx-1 bg-[#0073e1] text-white">
              1
            </span>
            <span className="flex items-center justify-center min-w-[30px] min-h-[30px] border border-inherit rounded mx-1">
              2
            </span>
            <span className="flex items-center justify-center min-w-[30px] min-h-[30px] border border-inherit rounded mx-1">
              3
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#f2fefe] py-14 lg:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between flex-wrap">
            <Link href="#">
              <a className="relative block min-w-[30%] md:min-w-[49%] lg:min-w-[30%] min-h-[100px] my-2">
                <div className="relative bg-[url(/images/house.jpg)] w-full h-[400px] lg:h-[500px] bg-cover bg-center rounded">
                  <div className="w-full h-full absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-all duration-700"></div>
                  <div className="text-white text-xl font-bold absolute inset-2/4 w-max -translate-y-1/2 -translate-x-1/2">
                    Phòng trọ Hồ Chí Minh
                  </div>
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="relative block min-w-[30%] md:min-w-[49%] lg:min-w-[30%] min-h-[100px] my-2">
                <div className="relative bg-[url(/images/house.jpg)] w-full h-[400px] lg:h-[500px] bg-cover bg-center rounded">
                  <div className="w-full h-full absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-all duration-700"></div>
                  <div className="text-white text-xl font-bold absolute inset-2/4 w-max -translate-y-1/2 -translate-x-1/2">
                    Phòng trọ Đà Nẵng
                  </div>
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="relative block min-w-[30%] md:min-w-[49%] lg:min-w-[30%] min-h-[100px] my-2">
                <div className="relative bg-[url(/images/house.jpg)] w-full h-[400px] lg:h-[500px] bg-cover bg-center rounded">
                  <div className="w-full h-full absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-all duration-700"></div>
                  <div className="text-white text-xl font-bold absolute inset-2/4 w-max -translate-y-1/2 -translate-x-1/2">
                    Phòng trọ Hà Nội
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-14 lg:py-20">
        <div className="container mx-auto">
          <div className="text-3xl font-bold mb-16 text-center lg:text-left">
            Tại sao lại chọn <br /> PhongTro123.com?
          </div>
          <div className="flex flex-col md:flex-row justify-between flex-wrap">
            <div className="bg-white text-center shadow-[0_0_15px_1px_#0798ff40] max-w-full md:max-w-[49%] lg:max-w-[20%] w-full h-auto py-10 px-3 my-4 lg:my-0 border-b-2 transition-all border-transparent hover:border-[#0073e1] hover:shadow-[0_0_10px_1px_#0798ff40]">
              <div className="text-6xl text-[#0073e1]">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <p className="text-3xl font-bold pt-8">116.998+</p>
                <p className="text-xl pt-8 text-[#7A7A7A]">Thành viên</p>
              </div>
            </div>
            <div className="bg-white text-center shadow-[0_0_15px_1px_#0798ff40] max-w-full md:max-w-[49%] lg:max-w-[20%] w-full h-auto py-10 px-3 my-4 lg:my-0 border-b-2 transition-all border-transparent hover:border-[#0073e1]">
              <div className="text-6xl text-[#0073e1]">
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <div>
                <p className="text-3xl font-bold pt-8">103.348+</p>
                <p className="text-xl pt-8 text-[#7A7A7A]">Tin đăng</p>
              </div>
            </div>
            <div className="bg-white text-center shadow-[0_0_15px_1px_#0798ff40] max-w-full md:max-w-[49%] lg:max-w-[20%] w-full h-auto py-10 px-3 my-4 lg:my-0 border-b-2 transition-all border-transparent hover:border-[#0073e1]">
              <div className="text-6xl text-[#0073e1]">
                <FontAwesomeIcon icon={faElevator} />
              </div>
              <div>
                <p className="text-3xl font-bold pt-8">300.000+</p>
                <p className="text-xl pt-8 text-[#7A7A7A]">Lượt truy cập/tháng</p>
              </div>
            </div>
            <div className="bg-white text-center shadow-[0_0_15px_1px_#0798ff40] max-w-full md:max-w-[49%] lg:max-w-[20%] w-full h-auto py-10 px-3 my-4 lg:my-0 border-b-2 transition-all border-transparent hover:border-[#0073e1]">
              <div className="text-6xl text-[#0073e1]">
                <FontAwesomeIcon icon={faStreetView} />
              </div>
              <div>
                <p className="text-3xl font-bold pt-8">2.500.000+</p>
                <p className="text-xl pt-8 text-[#7A7A7A]">Lượt xem/tháng</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
