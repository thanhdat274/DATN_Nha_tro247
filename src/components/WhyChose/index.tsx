import Link from 'next/link';
import React from 'react';

export interface IWhyChoseProps {}

export default function WhyChose(props: IWhyChoseProps) {
  return (
    <div className="bg-white rounded my-2 p-2 w-full text-left sm:text-center">
      <div className="title font-bold text-3xl mb-4 ">Tại sao lại chọn PhongTro123.com?</div>
      <div className="desc-1 ">
        Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào là trang web đứng top google về các từ
        khóa:
      </div>
      <div className="info flex flex-wrap w-full px-0 sm:px-20  lg:px-80">
        <div className="member w-1/2 text-center">
          <div className="member_number">1000</div>
          <div className="title font-normal">Thành viên</div>
        </div>
        <div className="post w-1/2 text-center">
          <div className="post_number">1000</div>
          <div className="title font-normal">Tin đăng</div>
        </div>
        <div className="access_times w-1/2 text-center">
          <div className="access_times_number">1000</div>
          <div className="title font-normal">Lượt truy cập/tháng</div>
        </div>
        <div className="views w-1/2 text-center">
          <div className="views_number">1000</div>
          <div className="title font-normal">Lượt xem/tháng</div>
        </div>
      </div>

      <div className="w-full flex justify-center py-2">
        <Link className="flex" href="/">
          <a className=" w-full sm:w-1/2 md:w-1/3 border-solid rounded bg-red-600 text-white py-2 text-xl text-center">
            Đăng tin ngay
          </a>
        </Link>
      </div>
    </div>
  );
}
