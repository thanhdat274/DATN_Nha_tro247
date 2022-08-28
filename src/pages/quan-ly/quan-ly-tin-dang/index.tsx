import React from 'react';
import styles from './style.module.css';
export interface IQuanLyDangTinProps {}

export default function QuanLyDangTin(props: IQuanLyDangTinProps) {
  return (
    <div>
      <main>
        <nav className="bg-slate-300 pt-3 pb-3 mt-2 rounded-[10px]">
          <ul className="flex pl-3">
            <li>
              <a href="https://phongtro123.com">Phongtro123.com / </a>
            </li>
            <li>
              <a href="https://phongtro123.com/quan-ly/index.html">Quản lý /</a>
            </li>
            <li>Danh sách tin đăng</li>
          </ul>
        </nav>
        <div className="flex justify-between mt-4 mb-3">
          <h1 className="text-[24px]">Quản lý tin đăng</h1>
          <div className="flex">
            <div className="">
              <select name="" className="h-10 border-solid border-2 border-gray-400 rounded-md">
                <option value="0">Lọc theo loại VIP</option>
                <option value="1">Tin hot</option>
                <option value="2">Tin Vip 30</option>
                <option value="3">Tin Vip 20</option>
                <option value="4">Tin Vip 10</option>
                <option value="5">Tin thường</option>
              </select>
            </div>
            <div className="ml-3">
              <select name="" className="h-10 border-solid border-2 border-gray-400 rounded-md">
                <option value="0">Lọc theo trạng thái </option>
                <option value="1">Tin đang hiển thị</option>
                <option value="2">Tin hết hạn</option>
                <option value="3">Tin đã bị ẩn</option>
              </select>
            </div>
            <div className="flex justify-center items-center bg-red-500 ml-3 rounded-md pl-2 pr-2">
              <a className="text-white" href="https://phongtro123.com/quan-ly/dang-tin-moi.html">
                Đăng tin mới
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <table className={`${styles['table']} border-collapse w-full`}>
              <thead>
                <tr>
                  <th>Mã tin</th>
                  <th>Ảnh đại diện</th>
                  <th>Tiêu đề</th>
                  <th>Giá</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày hết hạn</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0101</td>
                  <td>img</td>
                  <td>Tuyên Quang</td>
                  <td>12000 vnd</td>
                  <td>12/08/2022</td>
                  <td>01/05/2023</td>
                  <td>Hiển thị</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
