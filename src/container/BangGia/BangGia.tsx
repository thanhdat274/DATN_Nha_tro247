import React from 'react';
import styles from './style.module.css';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankTransfer from "../../../public/images/bank-transfer.png";
import cash from "../../../public/images/cash.png";
import contactus from "../../../public/images/contactus.png";
import creditCard from "../../../public/images/credit-card.png";
import demoTinThuong from "../../../public/images/demo-tinthuong.png";
import demoVip1 from "../../../public/images/demo-vip1.png";
import demoVip2 from "../../../public/images/demo-vip2.png";
import demoVip3 from "../../../public/images/demo-vip3.png";
import demoVipNoiBat from "../../../public/images/demo-vipnoibat.png";
import demoVipNoiBat2 from "../../../public/images/demo-vipnoibat2.png";
import momo from "../../../public/images/momo.png";
import onlineStore from "../../../public/images/online-store.png";
import payment from "../../../public/images/payment-method.png";
import qrCode from "../../../public/images/qr-code.png";
import zaloPay from "../../../public/images/zalopay.png";
import Image from 'next/image';


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
          <div className={styles['title-content-item']}>
            <p className="mb-5">Phongtro123 xin quý khách hàng thân thương được phép điều chỉnh giá dịch vụ.</p>
            <p>
              VÌ - Giờ đây sau hơn 7 năm chúng tôi mong mỏi hơn sự đồng lòng, thấu hiểu từ phía khách hàng thân thương.
              Chúng tôi luôn mong muốn đem lại trải nghiệm tốt hơn, hoàn hảo hơn cho quý khách hàng trong suốt thời gian
              gắn bó. Chúng tôi quyết định điều chỉnh giá, để tồn tại và trên cả là phục vụ hết mình vì quý khách hàng
              đã, đang và sẽ đồng hành tại website.
            </p>
          </div>
          {/* border-collapse */}
          <table className={`${styles['table-pricing']} table border-collapse 2xs:w-[375px] s:w-[540px]`}>
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
                  <strong className="2xs:text-xs">Ưu điểm</strong>
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
              <tr>
                <td>
                  <strong>Giá tuần(7 ngày)</strong>
                  <span style={{ display: 'block', color: '#4caf50', fontSize: '0.8rem' }}>
                    Rẻ hơn 5% so với giá ngày
                  </span>
                </td>
                <td>
                  <span style={{ display: 'block', textDecoration: 'line-through', color: 'red' }}>560.000đ</span>
                  <span className="block" style={{ color: '#4caf50' }}>
                    * Gói hiệu quả nhất khuyến nghị{' '}
                  </span>
                  <span className={styles['price-day']}>539.000đ</span>
                </td>

                <td>
                  <span className={styles['price-day']}>333.000 đ</span>
                </td>

                <td>
                  <span style={{ display: 'block', textDecoration: 'line-through', color: 'red' }}>210.000đ</span>
                  <span className="block" style={{ color: '#4caf50' }}>
                    * Giảm 20% chỉ còn{' '}
                  </span>
                  <span className={styles['price-day']}>168.000đ</span>
                </td>

                <td>
                  <span className={styles['price-day']}>133.000 đ</span>
                </td>

                <td>
                  <span className={styles['price-day']}>12.000 đ</span>
                  <span style={{ display: 'block', fontSize: '0.8rem' }}>(Tối thiểu 2 tuần)</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Giá tháng(30 ngày)</strong>
                  <span style={{ display: 'block', color: '#4caf50', fontSize: '0.8rem' }}>
                    Rẻ hơn 10% so với giá ngày
                  </span>
                </td>
                <td>
                  <span className={styles['price-day']}>2.160.000đ</span>
                </td>

                <td>
                  <span style={{ display: 'block', textDecoration: 'line-through', color: 'red' }}>1.500.000đ</span>
                  <span className="block" style={{ color: '#4caf50' }}>
                    * Giảm 18% chỉ còn{' '}
                  </span>
                  <span className={styles['price-day']}>1.239.000đ</span>
                </td>

                <td>
                  <span className={styles['price-day']}>810.000đ</span>
                </td>

                <td>
                  <span className={styles['price-day']}>540.000 đ</span>
                </td>

                <td>
                  <span className={styles['price-day']}>54.000 đ</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Giá đẩy tin</strong>
                </td>
                <td>40.000 đ</td>

                <td>25.000 đ</td>

                <td>15.000 đ</td>

                <td>10.000 đ</td>

                <td>2.000 đ</td>
              </tr>
              <tr>
                <td>
                  <strong>Màu sắc tiêu đề</strong>
                </td>
                <td>
                  <p style={{ color: '#E13427', fontWeight: 'bold' }}> Tiêu đề màu đỏ, in hoa</p>{' '}
                </td>

                <td>
                  <p style={{ color: '#ea2e9d', fontWeight: 'bold' }}> Tiêu đề màu hồng, in hoa</p>
                </td>

                <td>
                  <p style={{ color: '#FF6600', fontWeight: 'bold' }}> Tiêu đề màu cam, in hoa</p>
                </td>

                <td>
                  <p style={{ color: '#007BFF', fontWeight: 'bold' }}> Tiêu đề màu xanh, in hoa</p>{' '}
                </td>

                <td>
                  <p style={{ color: '#055699', fontWeight: 'bold' }}> Tiêu đề màu mặc định, viết thường </p>{' '}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tự động duyệt</strong>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faCheck} />{' '}
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </td>

                <td>
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>{' '}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Hiển thị số điện thoại ở trang danh sách</strong>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faXmark} />{' '}
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </td>

                <td>
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Huy hiệu nổi bật </strong>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faCheck} />{' '}
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faXmark} />{' '}
                  </span>
                </td>
                <td>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faXmark} />{' '}
                  </span>
                </td>

                <td>
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ background: '#fff', borderBottom: '0px' }}></td>
                <td className="m-auto" style={{ borderBottom: '0px', background: '#fff' }}>
                  <button className={`${styles['btn']}`}>Xem Demo</button>
                </td>
                <td className="m-auto" style={{ borderBottom: '0px', background: '#fff' }}>
                  <button className={`${styles['btn']}`}>Xem Demo</button>
                </td>
                <td className="m-auto" style={{ borderBottom: '0px', background: '#fff' }}>
                  <button className={`${styles['btn']}`}>Xem Demo</button>
                </td>
                <td className="m-auto" style={{ borderBottom: '0px', background: '#fff' }}>
                  <button className={`${styles['btn']}`}>Xem Demo</button>
                </td>
                <td className="m-auto " style={{ borderBottom: '0px', background: '#fff' }}>
                  <button className={`${styles['btn']} sm:text-[14.3px]`}>Xem Demo</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="container">
          <section className="section" style={{ padding: '50px 0', border: 'none', backgroundColor: 'transparent' }}>
            <div className="section-header">
              <div className="text-3xl font-bold" style={{ textAlign: 'center', marginBottom: 50 }}>
                Minh họa tin đăng
              </div>
            </div>
            <div className="section-content sm:p-[10px]">
              <div className={styles['vip-demo']}>
                <div className="">
                  <div className=" text-2xl font-bold mb-3">Tin VIP nổi bật</div>
                  <p>
                    <span style={{ color: '#E13427', fontWeight: 'bold' }}>TIÊU ĐỀ IN HOA MÀU ĐỎ</span>, gắn biểu tượng
                    5 ngôi sao màu vàng và hiển thị to và nhiều hình hơn các tin khác. Nằm trên tất cả các tin khác,
                    được hưởng nhiều ưu tiên và hiệu quả giao dịch cao nhất.
                  </p>
                  <p>Đồng thời xuất hiện đầu tiên ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó</p>
                </div>
                <Image src="/images/demo-vipnoibat.png" width={700} height={250} />
                <Image src="/images/demo-vipnoibat2.png" width={700} height={300}/>
              </div>
              <div className={styles['vip-demo']} id="demo-vip-1">
                <div className="">
                  <div className=" text-2xl font-bold mb-3 mt-5">Tin VIP 1</div>
                  <p>
                    <span style={{ color: '#ea2e9d', fontWeight: 'bold' }}>TIÊU ĐỀ IN HOA MÀU HỒNG</span>, gắn biểu
                    tượng 4 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP nổi bật, Tin VIP 1 và trên các
                    tin khác.
                  </p>
                </div>
                <Image src="/images/demo-vip1.png" width={700} height={300}/>
              </div>
              <div className={styles['vip-demo']} id="demo-vip-2">
                <div className="">
                  <div className=" text-2xl font-bold mb-3 mt-5">Tin VIP 2</div>
                  <p>
                    <span style={{ color: '#FF6600', fontWeight: 'bold' }}>TIÊU ĐỀ IN HOA MÀU CAM</span>, gắn biểu tượng
                    3 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP nổi bật, Tin VIP 1, Tin VIP 2 và trên
                    các tin khác.
                  </p>
                </div>
                <Image src="/images/demo-vip2.png" width={700} height={300}/>
              </div>
              <div className={styles['vip-demo']} id="demo-vip-3">
                <div className="">
                  <div className="text-2xl font-bold mb-3 mt-5">Tin VIP 3</div>
                  <p>
                    <span style={{ color: '#007BFF', fontWeight: 'bold' }}>TIÊU ĐỀ IN HOA MÀU XANH</span>, gắn biểu
                    tượng 2 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP nổi bật, Tin VIP 1, Tin VIP 2,
                    Tin VIP 3 và trên các tin khác.
                  </p>
                </div>
                <Image src="/images/demo-vip3.png" width={700} height={300}/>
              </div>
              <div className={styles['vip-demo']} id="demo-tinthuong">
                <div className="">
                  <div className="text-2xl font-bold mb-3 mt-5">Tin thường</div>
                  <p>
                    <span style={{ color: '#055699' }}>Tiêu đề màu mặc định, viết thường</span>. Hiển thị sau các tin
                    VIP.
                  </p>
                </div>
                <Image src="/images/demo-tinthuong.png" width={700} height={300}/>
              </div>
            </div>
          </section>
          <section className="section section-testimonials" style={{ padding: 0, marginBottom: 80, border: 0 }}>
            <div className="section-content main-width clearfix">
              <div className="section-header" style={{ marginBottom: 50, textAlign: 'center' }}>
                <div className="text-3xl font-bold">Khách hàng nói về chúng tôi</div>
                <p className="font-bold pt-5">Sự hài lòng của khách hàng là động lực phát triển của Phongtro123.com</p>
              </div>
              <div className="testimonials-list flex flex-wrap">
                <div className={`${styles['testimonials-item']} w-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name font-bold">Cô Minh Thu</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p className="">
                        Nhà tôi đang sống đã xây dựng cách đây 7 năm, phục vụ phần lớn cho nhu cầu của các con trai tôi.
                        Tuy nhiên, giờ chúng đã làm việc định cư ở xa nên không còn sống chung. Thấy nhà còn trống tận 4
                        phòng lớn nên hồi tháng 11 năm ngoái, vợ chồng chúng tôi quyết định cho thuê để nhà được vui vẻ
                        hơn. Ông nhà tôi được bạn bè giới thiệu nên cũng thử đăng tin lên website phongtro123.com, đâu
                        tầm 2 ngày thì đã có 3 cháu sinh viên đến hỏi thăm và dọn vào ở. Sau đó 3 ngày thì một chàng
                        thanh niên đang đi làm tại Bình Thạnh cũng lại thuê nốt căn cuối. Vợ chồng tôi cũng vui mừng vì
                        chưa đầy 1 tuần mà đã cho thuê xong toàn bộ phòng trong nhà. Nói không phải khen, chứ bạn bè tôi
                        đăng căn nào lên đây cũng tìm được khách tốt tới thuê.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name  font-bold">Chị Dung</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Vào 2 năm trước, khi bị ảnh hưởng bởi đại dịch covid-19, nhiều người bị ảnh hưởng của dịch và
                        phải trả phòng về quê, nhà trọ của tôi đã bị trả trọ gần hết, cả một nhà trọ chỉ còn 1 - 2 phòng
                        thuê, vào thời điểm thành phố mở của trở lại, người lao động đổ về trở lại thành phố rất đông,
                        rất nhiều người tìm kiếm phòng trọ, tuy nhiên nhà trọ của tôi lại không được quảng cáo nên rất
                        ít người biết đến và thuê, số lượng chỉ tăng lên 2 - 3 phòng. May mắn sau khi lướt tìm kiếm
                        thông tin cho thuê phòng trọ tôi đã tìm thấy website phongtro123.com cho phép đăng tin cho thuê
                        phòng trọ một cách nhanh chóng, và rất đơn giản, đặc biệt có đội ngũ nhân viên chăm sóc khách
                        hàng rất nhiệt tình, tư vấn, hỗ trợ tôi đăng tin cho thuê nhà trọ và chỉ trong 2 tuần tôi đã cho
                        thuê được toàn bộ phòng của nhà trọ của mình. Thực sự rất thích và vui, tôi đánh giá rất cao
                        website cho thuê phòng trọ này.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name font-bold">Chị Phương Anh</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Sở hữu căn hộ hơn 30 phòng trọ tại Dĩ An, Bình Dương. Năm trước do ảnh hưởng của dịch Covid-19,
                        nên khách thuê trọ đã trả phòng và về quê để tránh dịch. Nên phòng trọ của tôi chỉ còn lại vài
                        phòng có khách thuê ở lại. Cho đến năm nay, dịch covid-19 mới ổn định, nhưng không có khách trở
                        lại thuê phòng, nên tôi phải gấp rút đi tìm khách thuê. Nhờ vậy, tôi được người bạn giới thiệu,
                        tôi mới biết đến website phongtro123.com, trang đăng tin phòng trọ miễn phí. Thấy vậy, tôi vào
                        và đăng ký, đăng một vài tin, thật không ngờ, 5 ngày sau đã có người gọi đến thuê phòng trọ. Tôi
                        đánh giá cao về tính hiệu quả và sử dụng của website này.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name  font-bold">Chú Thái</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Tôi được một đứa cháu là sinh viên ở TPHCM giới thiệu cho trang web Phongtro123.com. Nó bảo nếu
                        bác có phòng trọ trống, chưa cho thuê được thì chụp hình đăng lên web, sẽ nhanh chóng có người
                        thuê tìm đến. Tôi cũng lần mò dùng thử, kết quả làm tôi khá bất ngờ. Cụ thể, từ ngày biết đến và
                        sử dụng dịch vụ đăng tin cho thuê phòng trọ trên trang Phongtro123.com, các căn trọ của tôi luôn
                        được lấp đầy. Những lúc có người chuyển đi, chỉ cần tôi đăng tin vài ngày là lại có khách thuê
                        mới tìm đến, thật sự rất hiệu quả. Chỉ với một ít tiền phí đăng tin đã giúp tôi nhanh chóng cho
                        thuê được vài căn trọ thì tôi thấy mức giá này là rất rẻ, vô cùng hợp lý. Tôi thực sự ấn tượng
                        với website này.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name font-bold">Chị Tường Vy</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Sở hữu khu đất với hơn 15 căn phòng trọ tại Mễ Trì, Nam Từ Liêm. Trong thời buổi công nghệ phát
                        triển, hầu hết người có nhu cầu thuê nhà, căn hộ đều thực hiện tìm kiếm qua hình thức trực
                        tuyến. Điều này khiến tôi vô cùng lo lắng bởi bản thân không am hiểu nhiều về Internet, về sau
                        được người chị giới thiệu cho website phongtro123.com cho phép đăng tải thông tin cho thuê cực
                        kỳ đơn giản và tôi đã thử. Việc đăng hình ảnh, thông tin phòng trọ lên trang web đã giúp khu trọ
                        tôi có nhiều sinh viên người lao động tới thuê. Tôi đánh giá rất cao website và hình thức quảng
                        cáo này.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name font-bold">Anh Ngọc Sơn</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Sở hữu khu đất với 16 căn phòng trọ cao cấp, anh chia sẻ việc tìm kiếm người thuê phòng trọ là
                        vấn đề hết sức nan giải trong thời điểm giao mùa sinh viên. May mắn thay, tôi được người quen
                        giới thiệu cho website phongtro123.com. Sau một thời gian sử dụng, tôi đã thu được hiệu quả bất
                        ngờ từ trang web đăng tin này. Tôi không còn phải chật vật tìm kiếm nơi quảng cáo cho thuê phòng
                        trọ nữa. Hệ thống tin đăng với giao diện dễ nhìn và chỉ với những thao tác đơn giản, tôi có thể
                        đăng tải thông tin cũng như hình ảnh dãy trọ của mình lên website dễ dàng. Bên cạnh đó, website
                        còn cung cấp các gói đăng tin dịch vụ từ miễn phí cho đến gói VIP giá cả phải chăng tuỳ thuộc
                        vào nhu cầu của mỗi người. Tôi đánh giá đây là một website chất lượng và đáng tin cậy dành cho
                        những ai muốn đăng tin cho thuê phòng trọ một cách hiệu quả.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name font-bold">Anh Ngọc Sơn</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Sở hữu khu đất với 16 căn phòng trọ cao cấp, anh chia sẻ việc tìm kiếm người thuê phòng trọ là
                        vấn đề hết sức nan giải trong thời điểm giao mùa sinh viên. May mắn thay, tôi được người quen
                        giới thiệu cho website phongtro123.com. Sau một thời gian sử dụng, tôi đã thu được hiệu quả bất
                        ngờ từ trang web đăng tin này. Tôi không còn phải chật vật tìm kiếm nơi quảng cáo cho thuê phòng
                        trọ nữa. Hệ thống tin đăng với giao diện dễ nhìn và chỉ với những thao tác đơn giản, tôi có thể
                        đăng tải thông tin cũng như hình ảnh dãy trọ của mình lên website dễ dàng. Bên cạnh đó, website
                        còn cung cấp các gói đăng tin dịch vụ từ miễn phí cho đến gói VIP giá cả phải chăng tuỳ thuộc
                        vào nhu cầu của mỗi người. Tôi đánh giá đây là một website chất lượng và đáng tin cậy dành cho
                        những ai muốn đăng tin cho thuê phòng trọ một cách hiệu quả.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['testimonials-item']} w-96 h-96 m-auto`}>
                  <div className="inner">
                    <div className="testimonials-author">
                      <aside>
                        <span className="testimonials-author-name font-bold">Anh Ngọc Sơn</span>
                      </aside>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Sở hữu khu đất với 16 căn phòng trọ cao cấp, anh chia sẻ việc tìm kiếm người thuê phòng trọ là
                        vấn đề hết sức nan giải trong thời điểm giao mùa sinh viên. May mắn thay, tôi được người quen
                        giới thiệu cho website phongtro123.com. Sau một thời gian sử dụng, tôi đã thu được hiệu quả bất
                        ngờ từ trang web đăng tin này. Tôi không còn phải chật vật tìm kiếm nơi quảng cáo cho thuê phòng
                        trọ nữa. Hệ thống tin đăng với giao diện dễ nhìn và chỉ với những thao tác đơn giản, tôi có thể
                        đăng tải thông tin cũng như hình ảnh dãy trọ của mình lên website dễ dàng. Bên cạnh đó, website
                        còn cung cấp các gói đăng tin dịch vụ từ miễn phí cho đến gói VIP giá cả phải chăng tuỳ thuộc
                        vào nhu cầu của mỗi người. Tôi đánh giá đây là một website chất lượng và đáng tin cậy dành cho
                        những ai muốn đăng tin cho thuê phòng trọ một cách hiệu quả.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" style={{ padding: 0, border: 0, marginBottom: 100 }}>
            <div className="font-bold text-3xl" style={{ textAlign: 'center', marginBottom: 50 }}>
              Phương thức thanh toán
            </div>
            <div className="section-content">
              <div className="row addfund_method_list clearfix flex flex-wrap sm:justify-center sm:items-center 2xs:justify-center 2xs:items-center s:justify-center s:items-center">
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/chuyen-khoan.html">
                      <div className={`${['method_item_icon']}`}>
                      <Image src="/images/bank-transfer.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">Chuyển khoản</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/atm-internet-banking.html">
                      <div className="method_item_icon">
                       <Image src="/images/payment-method.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">Thẻ ATM Internet Banking</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/the-tin-dung.html">
                      <div className="method_item_icon">
                      <Image src="/images/credit-card.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">Thẻ tín dụng quốc tế</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/tien-mat.html">
                      <div className="method_item_icon">
                      <Image src="/images/cash.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">Tiền mặt</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/momo.html">
                      <div className="method_item_icon">
                      <Image src="/images/momo.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">MOMO</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/zalopay.html">
                      <div className="method_item_icon">
                      <Image src="/images/zalopay.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">ZaloPay</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/cua-hang-tien-loi.html">
                      <div className="method_item_icon">
                      <Image src="/images/online-store.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">Điểm giao dịch, cửa hàng tiện lợi</div>
                    </a>
                  </div>
                </div>
                <div className={`${styles['box-cart']}`} style={{ marginBottom: 25 }}>
                  <div className={`${styles['method_item']}`}>
                    <a href="https://phongtro123.com/quan-ly/nap-tien/qr-code.html">
                      <div className="method_item_icon">
                      <Image src="/images/qr-code.png" width={100} height={100}/>
                      </div>
                      <div className="method_item_name font-bold">Quét mã QRCode</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="section"
            style={{
              padding: 50,
              border: 0,
              marginBottom: 100,
              boxShadow: '0 0 30px 10px rgb(0 0 0 / 3%)',
              lineHeight: 3,
            }}
          >
            <div className="font-bold text-3xl" style={{ textAlign: 'center' }}>
              Liên hệ với chúng tôi
            </div>
            <div className="" style={{ textAlign: 'center' }}>
              <p>Địa chỉ: LD - 02.06 Lexington Residence, số 67 Mai Chí Thọ, Phường An Phú, Tp.Thủ Đức.</p>
              <p>Hotline: 0917686101</p>
              <p>Email: cskh.phongtro123@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
      {/* <GioiThieu title="giới thiệu" desc="sadasdasdsads" /> */}
    </div>
  );
};

export default BangGia;
