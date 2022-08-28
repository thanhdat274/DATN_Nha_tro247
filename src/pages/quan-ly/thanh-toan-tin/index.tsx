import ContactUs from '@/components/ContactUs';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import styles from './thanh-toan-tin.module.css'

export interface IThanhToanTinProps {}

export default function ThanhToanTin(props: IThanhToanTinProps) {
  return (
    <>
    <div className="pb-60">
      <div className="bg-amber-100 border-amber-100 py-2.5 px-2.5 rounded-lg sm:hidden">
        <p>
          Xin chào <strong>Nguyễn Đắc Trọng</strong> . Mã tài khoản : <strong>12345</strong>
        </p>
        <p>
          Số dư tài khoản: <strong>0đ</strong>
        </p>
      </div>
      <div className="  sm:border-2  sm:my-3.5 sm:rounded-md   sm:bg-slate-100 ">
        <div className="   mx-3 my-3">
          <ul className="flex flex-wrap">
            <li className="text-sky-600">Phongtro123.com</li> <p className="px-1">/</p>
            <li className="text-sky-600">Quản lý</li> <p className="px-1">/</p>
            <li>Nạp tiền</li>
          </ul>
        </div>
      </div>
      <div className="  ">
        <h1 className=" text-2xl lg:text-3xl pb-3">Thanh toán tin </h1>
        <hr />
      </div>
      <div className="bg-red-100 border-amber-100 py-2.5 px-2.5 rounded-lg ">
        <p>
          Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP trong
          mục QUẢN LÝ TIN ĐĂNG để làm mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ không được
          duyệt.
        </p>
      </div>
      <div className="sm:flex   ">
        <div className="sm:w-4/6 mx-2.5 my-2.5">
          <div className=" pt-9 ">
            <h1 className=" text-2xl lg:text-3xl pb-3">Cho thuê phòng trọ giá dẻ </h1>
          </div>
          <div className="sm:flex sm:w-full">
            <div className="pt-7 sm:w-full">
              <h1 className="pb-1.5">Chọn loại tin</h1>
              <select
                name=""
                id=""
                className="w-full  border-2 border-inherit py-3.5 sm:py-2 sm:rounded-lg sm:w-full pl-3"
              >
                <option value=""> Tin VIP nổi bật (80.000đ/ngày)</option>
                <option value=""> Tin VIP 1 (50.000đ/ngày)</option>
                <option value=""> Tin VIP 2 (30.000đ/ngày)</option>
                <option value=""> Tin VIP 3(20.000đ/ngày)</option>
                <option value=""> Tin thường (2000đ/ngày)</option>
              </select>
            </div>
            <div className="pt-7 sm:px-10 sm:w-full">
              <h1 className="pb-1.5">Gói thời gian</h1>
              <select
                name=""
                id=""
                className="w-full  border-2 border-inherit py-3.5 sm:py-2 sm:rounded-lg sm:w-full pl-3"
              >
                <option value=""> Đăng theo ngày</option>
                <option value=""> Đăng theo tuần</option>
                <option value=""> Đăng theo tháng</option>
              </select>
            </div>
            <div className="pt-7 sm:w-full w-full">
              <h1 className="pb-1.5">Số ngày</h1>
              <select
                name=""
                id=""
                className="w-full  border-2 border-inherit py-3.5 sm:py-2 sm:rounded-lg sm:w-full pl-3"
              >
                <option value=""> 3 ngày</option>
                <option value=""> 4 ngày</option>
                <option value=""> 5 ngày</option>
                <option value=""> 6 ngày</option>
                <option value=""> 7 ngày</option>
                <option value=""> 8 ngày</option>
                <option value=""> 9 ngày</option>
                <option value=""> 10 ngày</option>
                <option value=""> 11 ngày</option>
                <option value=""> 12 ngày</option>
                <option value=""> 13 ngày</option>
                <option value=""> 14 ngày</option>
                <option value=""> 15 ngày</option>
              </select>
            </div>
          </div>
          <div className="pt-5">
            <h2>Gắn nhãn</h2>
            <div className="pt-3">
              <input type="checkbox" />
              <label htmlFor="" className="px-3">
                Cho thuê nhanh <br /> <span className="px-7">(2000đ/ngày)</span>
              </label>
            </div>
          </div>
          <div>
            <h1 className="text-3xl my-5">Chọn phương thức thanh toán</h1>
          </div>
          <div>
            <div>
              <input type="radio" />
              <label htmlFor="" className="px-3 ">
                Trừ tiền trong tài khoản Phongtro123 (Bạn đang có: TK Chính 0đ) <br />{' '}
                <p className="text-red-500 px-7">
                  Số tiền trong tài khoản của bạn không đủ để thực hiện thanh toán, vui lòng{' '}
                  <Link href="">
                    <a className="text-blue-600">nạp thêm</a>
                  </Link>{' '}
                  hoặc chọn phương thức khác bên dưới
                </p>
              </label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="" className="px-3 ">
                Thanh toán qua ví điện tử MOMO <br />
                <span className="px-7 pt-5 	">
                  {' '}
                  <Image className="" src={'/images/momo.png'} width={30} height={30} alt="" />
                </span>
              </label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="" className="px-3 ">
                Thanh toán qua thẻ ngân hàng nội địa
                <br />
                <span className="px-7 pt-5 	">
                  {' '}
                  <Image className="" src={'/images/bank-transfer.png'} width={40} height={30} alt="" />
                </span>
              </label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="" className="px-3 ">
                Thanh toán qua thẻ quốc tế
                <br />
                <span className="px-7 pt-5 	">
                  {' '}
                  <Image className="" src={'/images/credit-card.png'} width={90} height={30} alt="" />
                </span>
              </label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="" className="px-3 ">
                Chuyển khoản ngân hàng <br />
                <p className="px-7">
                  Nội dung chuyển khoản: <span className="text-red-600">PT123 THANHTOANTIN 605586 hot: 5 ngay</span>
                </p>
                <p  className="px-7">
                  Số tiền chuyển khoản: <span className="text-red-600">400.000đ</span>
                </p>
              </label>
            </div>
          </div>
          <div className="flex w-full ">
            <div className=" w-full mr-2 text-center border-2 py-3.5 rounded-lg bg-slate-500 text-white font-bold text-sm hover:bg-slate-600" >
             <Link href=""><a className=" ">Quay lại</a></Link>
            </div>
            <div className=" w-full ml-2 text-center border-2 py-3.5 rounded-lg bg-blue-500 text-white font-bold text-sm hover:bg-blue-600">
              <button className="">Thanh toán:400.000đ</button>
            </div>
            {/* <div className=" w-full pl-3.5">
              <button className="border-2 border-black w-full py-3.5 rounded-lg">Thanh toán : 400.000đ</button>
            </div> */}
          </div>
        </div>
        <div className="sm:w-2/6 mx-2.5 my-2.5 h-80 mb-48 ">
          <div className="">
            <div className="h-80 w-ful mb-7"></div>
            <div className="border-2 rounded-lg bg-yellow-100		">
              <div className="py-2.5	px-2.5 text-yellow-800">
                <h1 className="text-2xl ">Lưu ý khi đăng tin</h1>
                <ul className={`${styles['lii']} pl-4`}>
                  <li >  Nội dung phải viết bằng tiếng Việt có dấu</li>
                  <li >Tiêu đề tin không dài quá 100 kí tự</li>
                  <li>Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.</li>
                  <li>
                    Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản
                    đồ bằng cách kéo icon tới đúng vị trí của tin rao.
                  </li>
                  <li>
                    Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng
                    ảnh để được giao dịch nhanh chóng!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    </div>
    <ContactUs />
    </>
  );
}
