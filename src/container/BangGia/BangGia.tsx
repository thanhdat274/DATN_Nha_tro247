import React from 'react';
import GioiThieu from '../GioiThieu/GioiThieu';
import styles from './style.module.css';
type Props = {};

const BangGia = (props: Props) => {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-3xl pt-5">Giới thiệu phongtro123.com</h2>
      <section className={styles['section-header']}>
        <section className={styles['section-content']}>
          <h3>
            ĐỪNG ĐỂ PHÒNG TRỐNG THÊM BẤT CỨ NGÀY NÀO!, đăng tin ngay tại PHONGTRO123.COM và tất cả các vấn đề sẽ được
            giải quyết một cách nhanh nhất.
          </h3>
          <h3>ƯU ĐIỂM PHONGTRO123:</h3>
          <p>
            {' '}
            <strong>+ Top đầu google về từ khóa </strong> : cho thuê phòng trọ, thuê phòng trọ, phòng trọ hồ chí minh,
            phòng trọ hà nội, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép…với lưu lượng truy cập (traffic)
            cao nhất trong lĩnh vực.
          </p>
          <p>
            {' '}
            <strong>+</strong> Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng
            trọ với hơn 103.348 tin trên hệ thống và tiếp tục tăng.
          </p>

          <p>
            {' '}
            <strong>+</strong> Phongtro123.com tự hào có số lượng người dùng lớn nhất trong lĩnh vực cho thuê phòng trọ
            với hơn 300.000 khách truy cập thường xuyên và hơn 2.500.000 lượt pageview mỗi tháng.
          </p>
          <p>
            {' '}
            <strong>+</strong> Phongtro123.com tự hào được sự tin tưởng sử dụng của hơn 116.998 khách hàng là chủ nhà,
            đại lý, môi giới đăng tin thường xuyên tại website.
          </p>
          <p>
            {' '}
            <strong>+</strong> Phongtro123.com tự hào ghi nhận 88.879 giao dịch thành công khi sử dụng dịch vụ tại web,
            mức độ hiệu quả đạt xấp xỉ 85% tổng tin đăng.
          </p>
        </section>
      </section>
      <div className="container">
        <section className={styles['section']}>
          <div>
            <h1 className="text-center font-bold text-3xl pt-10">Bảng giá dịch vụ </h1>
            <p className="text-center pb-5">Áp dụng từ ngày 25/5/2022</p>
          </div>
        </section>
        <section className={styles['section-content']}>
          <div style={{ width: '1100px', textAlign: 'center' }}>
            <p className="mb-5">Phongtro123 xin quý khách hàng thân thương được phép điều chỉnh giá dịch vụ.</p>
            <p>
              VÌ - Giờ đây sau hơn 7 năm chúng tôi mong mỏi hơn sự đồng lòng, thấu hiểu từ phía khách hàng thân thương.
              Chúng tôi luôn mong muốn đem lại trải nghiệm tốt hơn, hoàn hảo hơn cho quý khách hàng trong suốt thời gian
              gắn bó. Chúng tôi quyết định điều chỉnh giá, để tồn tại và trên cả là phục vụ hết mình vì quý khách hàng
              đã, đang và sẽ đồng hành tại website.
            </p>
          </div>
          <table className={`${styles['table-pricing']} table border-collapse w-full`}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#fff' }}></th>
                <th style={{ backgroundColor: '#E13427' }}>Tin VIP nổi bật </th>
                <th style={{ backgroundColor: '#ea2e9d' }}>Tin VIP 1</th>
                <th style={{ backgroundColor: '#FF6600' }}>Tin VIP 2</th>
                <th style={{ backgroundColor: '#007BFF' }}>Tin VIP 3</th>
                <th style={{ backgroundColor: '#055699' }}>Tin thường</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Ưu điểm</strong>
                </td>
                <td>
                  <p>
                    - Lượt xem nhiều gấp <strong>30 lần</strong> so với tin thường
                  </p>
                  <p>- Ưu việt, tiếp cận tối đa khách hàng.</p>
                  <p>- Xuất hiện vị trí đầu tiên ở trang chủ</p>
                  <p>- Đứng trên tất cả các loại tin VIP khác</p>
                  <p>- Xuất hiện đầu tiên ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 15 lần so với tin thường</p>
                  <p>- Tiếp cận rất nhiều khách hàng.</p>
                  <p>- Xuất hiện sau VIP NỔI BẬT và trước Vip 2, Vip 3, tin thường.</p>
                  <p>- Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 10 lần so với tin thường</p>
                  <p>- Tiếp cận khách hàng rất tốt.</p>
                  <p>- Xuất hiện sau VIP 1 và trước VIP 3, tin thường.</p>
                  <p>- Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 5 lần so với tin thường</p>
                  <p>- Tiếp cận khách hàng tốt.</p>
                  <p>- Xuất hiện sau VIP 2 và trước tin thường.</p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 5 lần so với tin thường</p>
                  <p>- Tiếp cận khách hàng tốt.</p>
                  <p>- Xuất hiện sau VIP 2 và trước tin thường.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Giá ngày</strong>
                </td>
                <td>
                  <p>
                    - Lượt xem nhiều gấp <strong>30 lần</strong> so với tin thường
                  </p>
                  <p>- Ưu việt, tiếp cận tối đa khách hàng.</p>
                  <p>- Xuất hiện vị trí đầu tiên ở trang chủ</p>
                  <p>- Đứng trên tất cả các loại tin VIP khác</p>
                  <p>- Xuất hiện đầu tiên ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 15 lần so với tin thường</p>
                  <p>- Tiếp cận rất nhiều khách hàng.</p>
                  <p>- Xuất hiện sau VIP NỔI BẬT và trước Vip 2, Vip 3, tin thường.</p>
                  <p>- Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 10 lần so với tin thường</p>
                  <p>- Tiếp cận khách hàng rất tốt.</p>
                  <p>- Xuất hiện sau VIP 1 và trước VIP 3, tin thường.</p>
                  <p>- Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 5 lần so với tin thường</p>
                  <p>- Tiếp cận khách hàng tốt.</p>
                  <p>- Xuất hiện sau VIP 2 và trước tin thường.</p>
                </td>
                <td>
                  <p>- Lượt xem nhiều gấp 5 lần so với tin thường</p>
                  <p>- Tiếp cận khách hàng tốt.</p>
                  <p>- Xuất hiện sau VIP 2 và trước tin thường.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      {/* <GioiThieu title="giới thiệu" desc="sadasdasdsads" /> */}
    </div>
  );
};

export default BangGia;
