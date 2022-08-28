import * as React from 'react';
import styles from './style.module.css';
export interface IPaymentsHistoryProps {}

export default function PaymentsHistory(props: IPaymentsHistoryProps) {
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
            <li>Lịch sử thanh toán tin</li>
          </ul>
        </nav>
        <div className="flex justify-between mt-4 mb-3">
          <h1 className="text-[24px]">Lịch sử thanh toán tin</h1>
        </div>
        <hr />
        <div className="mt-3">
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
      </main>
    </div>
  );
}
