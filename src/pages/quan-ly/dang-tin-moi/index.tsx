import Link from 'next/link';
import React from 'react';
type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className=" md:mx-10">
        <div className="bg-amber-100 border-amber-100 py-2.5 px-2.5 rounded-lg sm:hidden">
          <p>
            Xin chào <strong>Nguyễn Đắc Phương</strong> . Mã tài khoản : <strong>12345</strong>
          </p>
          <p>
            Số dư tài khoản: <strong>0đ</strong>
          </p>
        </div>
        <div className="sm:border-2 sm:my-3.5 sm:rounded-md sm:bg-slate-100 ">
          <div className="mx-3 my-3">
            <ul className="flex flex-wrap">
              <li className="text-sky-600">Phongtro123.com</li> <p className="px-1">/</p>
              <li className="text-sky-600">Quản lý</li>
              <p className="px-1">/</p>
              <li>Đăng tin mới</li>
            </ul>
          </div>
        </div>
        <div className="">
          <h1 className=" text-2xl lg:text-3xl pb-3">Đăng tin mới</h1>
          <hr />
        </div>
        <div className="sm:border-2  sm:my-3.5 sm:rounded-md bg-red-200">
          <p className="mx-3 my-3">
            Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP trong
            mục QUẢN LÝ TIN ĐĂNG để làm mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ không được
            duyệt.
          </p>
        </div>
        <div className="w-full m-auto pt-8 ">
          <form className="w-full justify-center">
            <div className="">
              <div className="sm:flex">
                <div className="">
                  {/* start ttForm-1-left */}
                  <div className="sm:w-[320px] md:w-[380px]">
                    <h3 className="font-bold text-xl my-2">Địa chỉ cho thuê</h3>
                    <div className="md:flex">
                      <label className="3xs:block md:block flex-1 flex mr-2  my-2">
                        <span className="text-black font-bold 2xs:w-[160px] xs:w-[160px] s:w-[180px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px] md:text-[11px]">
                          Tỉnh/Thành phố
                        </span>
                        <select className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-[5px] md:text-[10px]">
                          <option className="pl-2" value={''}>
                            Corporate event
                          </option>
                          <option className="pl-2">Wedding</option>
                          <option className="pl-2">Birthday</option>
                          <option className="pl-2">Other</option>
                        </select>
                      </label>
                      <label className="3xs:block md:block flex-1 flex mr-2  my-2">
                        <span className="text-black font-bold 2xs:w-[160px] xs:w-[160px] s:w-[180px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px] md:text-[12px]">
                          Quận/Huyện
                        </span>
                        <select className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-[5px] md:text-[10px]">
                          <option className="pl-2" value={''}>
                            Corporate event
                          </option>
                          <option className="pl-2">Wedding</option>
                          <option className="pl-2">Birthday</option>
                          <option className="pl-2">Other</option>
                        </select>
                      </label>
                      <label className="3xs:block md:block flex-1 flex mr-2  my-2">
                        <span className="text-black font-bold 2xs:w-[160px] xs:w-[160px] s:w-[180px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px] md:text-[12px]">
                          Phường/Xã
                        </span>
                        <select className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-[5px] md:text-[10px]">
                          <option className="pl-2" value={''}>
                            Corporate event
                          </option>
                          <option className="pl-2">Wedding</option>
                          <option className="pl-2">Birthday</option>
                          <option className="pl-2">Other</option>
                        </select>
                      </label>
                      <label className="3xs:block md:block flex-1 flex mr-2  my-2">
                        <span className="text-black font-bold 2xs:w-[160px] xs:w-[160px] s:w-[180px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px] md:text-[12px]">
                          Đường/Phố
                        </span>
                        <select className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-[5px] md:text-[10px]">
                          <option className="pl-2" value={''}>
                            Corporate event
                          </option>
                          <option className="pl-2">Wedding</option>
                          <option className="pl-2">Birthday</option>
                          <option className="pl-2">Other</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <label className="block" htmlFor="">
                        <span className="text-black font-bold 2xs:w-[160px] xs:w-[160px] s:w-[180px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px] md:text-[12px]">
                          Số nhà
                        </span>
                        <input
                          type="text"
                          className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-2"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block" htmlFor="">
                        <span className="2xs:m-auto 2xs:text-[14px] lg:text-[12px]">Địa chỉ chính xác</span>
                        <input
                          type="text"
                          className="md:text-[12px] bg-gray-200 w-full h-[30px] 2xs:m-auto 2xs:text-[14px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-2"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div className="">
                        <h3 className="font-bold text-xl my-4">Thông tin mô tả</h3>
                        <div>
                          <label className="3xs:block md:block flex-1 flex mr-2  my-2">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Loại chuyên mục
                            </span>
                            <select className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-[5px] md:text-[10px]">
                              <option className="pl-2" value={''}>
                                -- Chọn loại chuyên mục --
                              </option>
                              <option className="pl-2">Wedding</option>
                              <optgroup label="Căn hộ">
                                <option className="pl-2">Wedding</option>
                                <option className="pl-2">Wedding</option>
                              </optgroup>
                              <option className="pl-2">Birthday</option>
                              <option className="pl-2">Other</option>
                            </select>
                          </label>
                        </div>
                        <div>
                          <label className="block" htmlFor="">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Tiêu đề
                            </span>
                            <input
                              type="text"
                              className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-2"
                            />
                          </label>
                        </div>
                        <div>
                          <label className="block" htmlFor="">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Nội dung mô tả
                            </span>
                            <textarea
                              className="md:text-[12px] w-full h-[150px] 2xs:m-auto 2xs:text-[14px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-2"
                              id=""
                            ></textarea>
                          </label>
                        </div>
                        <div>
                          <label className="block" htmlFor="">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Thông tin liên hệ
                            </span>
                            <input
                              type="text"
                              className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-2"
                            />
                          </label>
                        </div>
                        <div>
                          <label className="block" htmlFor="">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Giá cho thuê
                            </span>
                            <div className="flex">
                              <input
                                type="text"
                                className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-l-lg border-blackshadow-sm p-2"
                              />
                              <span className="2xs:m-auto 2xs:text-[14px] lg:text-[12px] border-[1px] rounded-r-lg h-[30px] mt-1 p-2 bg-gray-400">
                                Đồng
                              </span>
                            </div>
                          </label>
                        </div>
                        <div>
                          <label className="block" htmlFor="">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Diện tích
                            </span>
                            <div className="flex">
                              <input
                                type="number"
                                className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-l-lg border-blackshadow-sm p-2"
                              />
                              <span className="2xs:m-auto 2xs:text-[14px] lg:text-[12px] border-[1px] rounded-r-lg h-[30px] mt-1 p-2 bg-gray-400">
                                m<sup>2</sup>
                              </span>
                            </div>
                          </label>
                        </div>
                        <div>
                          <label className="3xs:block md:block flex-1 flex mr-2  my-2">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Đối tượng cho thuê
                            </span>
                            <select className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-[5px] md:text-[10px]">
                              <option className="pl-2" value={''}>
                                -- Tất cả --
                              </option>
                              <option className="pl-2">Nam</option>
                              <option className="pl-2">Nữ</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div>
                        <div>
                          <h3 className="font-bold text-xl my-4">Hình ảnh</h3>
                          <label className="block text-sm font-medium text-gray-700 text-bold">
                            Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white text-center rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  <span className="text-black">Thêm ảnh</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-xl my-4">Video</h3>
                          <label htmlFor="" className="block">
                            <span className="text-black font-bold 2xs:w-[180px] xs:w-[190px] s:w-[200px] sm:w-[160px] pt-[4px] xs:pt-[8px] s:pt-[6px] sm:pt-[8px] s:text-[16px]">
                              Video Link (Youtube)
                            </span>
                            <input
                              type="text"
                              className="w-full h-[30px] 2xs:m-auto 2xs:text-[14px] md:text-[12px] 3xs:w-full hover:bg-gray-200 border-[1px] block mt-1 rounded-md border-blackshadow-sm p-2"
                            />
                          </label>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Hoặc upload Video từ máy của bạn
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <span className="text-black">Thêm Video</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Tạo mới
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end-ttForm1-left */}
                <div className="ml-4 hidden sm:inline md:text-[10px]">
                  <div className="">
                    <div>
                      <div>
                        <div style={{ position: 'relative' }}>
                          <iframe
                            className="w-full h-[230px] md:h-[200px]"
                            src="https://maps.google.com/maps?hl=en&q=D%E1%BB%8Bch%20v%E1%BB%8Dng%20+(Ti%C3%AAu%20%C4%91%E1%BB%81)&ie=UTF8&t=p&z=13&iwloc=B&output=embed"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                          />
                          <style
                            dangerouslySetInnerHTML={{
                              __html: '#gmap_canvas img{max-width:none!important;background:none!important}',
                            }}
                          />
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="hidden sm:inline sm:w-full">
                      <div className="lg:max-w-[300px]">
                        <div className="border-2 rounded-lg bg-yellow-100 h-auto">
                          <div className="py-2.5	px-2.5 text-yellow-800">
                            <h1 className="text-2xl md:text-xl">Lưu ý khi đăng tin</h1>
                            <ul className="w-auto sm:text-sm md:text-[10px]">
                              <li> Nội dung phải viết bằng tiếng Việt có dấu</li>
                              <li>Tiêu đề tin không dài quá 100 kí tự</li>
                              <li>Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.</li>
                              <li>
                                Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của
                                bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.
                              </li>
                              <li>
                                Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có
                                ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="sm:hidden">
            <div>
              <div style={{ position: 'relative' }}>
                <iframe
                  className="w-full h-[230px]"
                  src="https://maps.google.com/maps?hl=en&q=D%E1%BB%8Bch%20v%E1%BB%8Dng%20+(Ti%C3%AAu%20%C4%91%E1%BB%81)&ie=UTF8&t=p&z=13&iwloc=B&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html: '#gmap_canvas img{max-width:none!important;background:none!important}',
                  }}
                />
              </div>
              <br />
            </div>
          </div>
          <div className="sm:hidden w-full">
            <div className="">
              <div className="border-2 rounded-lg bg-yellow-100">
                <div className="py-2.5	px-2.5 text-yellow-800">
                  <h1 className="text-2xl ">Lưu ý khi đăng tin</h1>
                  <ul className="">
                    <li> Nội dung phải viết bằng tiếng Việt có dấu</li>
                    <li>Tiêu đề tin không dài quá 100 kí tự</li>
                    <li>Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.</li>
                    <li>
                      Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên
                      bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.
                    </li>
                    <li>
                      Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy
                      đăng ảnh để được giao dịch nhanh chóng!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
