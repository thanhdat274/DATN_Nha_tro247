import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './GioiThieu.module.css';

type Props = {
  title?: string;
  desc?: string;
};

const GioiThieu = (props: Props) => {
  const { title, desc } = props;
  return (
    <div className='container mx-auto'>
      <main className={styles.main}>
        <article className={styles.the_article}>
          <div className={styles.article_main_content}>
            <h2 className="text-[23.5px] mb-[18px] leading-[30px] font-bold">Hướng dẫn đăng tin</h2>
            <p className={styles.desc}>Chào bạn, sau đây là hướng dẫn sử dụng cho thành viên website nhatro247.com.</p>
            <p className={styles.desc}>
              Nếu bạn chưa có tài khoản, hãy{' '}
              <Link href="" className={styles.link}>
                <a className={styles.link}> đăng ký tại đây</a>
              </Link>{' '}
              trước khi bắt đầu đăng tin mới.
            </p>
            <p className={styles.desc}>
              Nếu đã có tài khoản, sau khi{' '}
              <Link href="" className={styles.link}>
                <a className={styles.link}>đăng nhập</a>
              </Link>{' '}
              vào website, bạn bấm vào nút{' '}
              <Link href="" className={styles.link}>
                <a className={styles.link}> ĐĂNG TIN</a>
              </Link>{' '}
              để bắt đầu.
            </p>
            <p>
              Khi đăng tin các bạn đọc kỹ mô tả từng bước, nhập đầy đủ và chính xác nội dung cho tin đăng, đặc biệt là
              mục Giá và Diện tích. Những tin có nội dung hình ảnh rõ ràng, đầy đủ sẽ có tỉ lệ xem cao hơn 50%.
            </p>
            <p className={styles.desc}>Lưu ý khi đăng tin:</p>
            <p className={styles.desc}>+ Điền đầy đủ các thông tin bắt buộc vào các ô nhập liệu trong phần đăng tin.</p>
            <p className={styles.desc}>
              + Phần giá cho thuê, vui lòng nhập chính xác 1 giá duy nhất (Không nhập giá từ ....đến ....) và chọn đúng
              đơn vị giá là triệu/tháng hoặc nghìn/tháng. Ví dụ bạn cho thuê 3 triệu/tháng thì bạn nhập đủ như sau
              3000000 (1 số 3 và 6 số 0)
            </p>
            <p className={styles.desc}>
              + Diện tích nhập đúng 1 diện tích duy nhất (Không nhập diện tích từ ....đến ....)
            </p>
            <p className={styles.desc}>
              + Sau khi nhập đầy đủ các thông tin, bấm ĐĂNG TIN NGAY và chờ vài giây để tin bạn hiển thị trên website,
              nếu đăng tin thành công hệ thống sẽ báo bạn đã đăng tin thành công, nếu hệ thống cảnh báo màu đỏ, các ô
              chọn màu bị sai, vui lòng nhập lại cho chính xác và bấm ĐĂNG TIN NGAY lại.
            </p>
            <br />
            <h2 className="text-[23.5px] mb-[18px] leading-[30px] font-bold">Hướng dẫn nạp tiền</h2>
            <p className={styles.desc}>
              {'Sau khi "Đăng nhập" quý khách nhấp chọn vào phần Quản lý tài khoản và chọn'}{' '}
              <Link className={styles.link} href="">
                <a className={styles.link}>Nạp Tiền</a>
              </Link>
            </p>
            <p className={styles.desc}>Quý khách có thể chọn các hình thức thanh toán sau: </p>
            <ul className="list-disc ml-[25px]">
              <li>
                Chuyển khoản trực tiếp vào các số tài khoản tại nhatro247.com thông qua internet banking hoặc chuyển
                khoản thông thường.
              </li>
              <li>
                Thanh toán bằng thẻ ngân hàng nội địa (Lưu ý, thẻ ngân hàng nội địa phải đăng ký giao dịch online tại
                ngân hàng phát hành thẻ)
              </li>
              <li>Thanh toán bằng thẻ tính dụng quốc tế/Visa</li>
              <li>Thanh toán qua ví điện tử Momo cho số điện thoại 0917.686.101</li>
              <li>Thanh toán qua Zalo Pay cho số điện thoại 0917.686.101</li>
              <li>
                Thanh toán trực tiếp tại đỉa chỉ văn phòng (Lầu 7, Số 150 Trần Não, Kp2, Phường Bình An, Quận 2, TP. Hồ
                Chí Minh)
              </li>
            </ul>
            <p className={styles.desc}>
              Link nạp tiền:{' '}
              <Link className={styles.link} href="">
                <a className={styles.link}>https://nhatro247.com/quan-ly/nap-tien.html</a>
              </Link>
            </p>
            <br />
            <h2 className="text-[23.5px] mb-[18px] leading-[30px] font-bold">Hướng dẫn quản lý tin rao</h2>
            <p>
              Đăng nhập tài khoản, sau đó nhấp vào phần Quản lý tài khoản, chọn{' '}
              <Link href="" className={styles.link}>
                <a className={styles.link}>Quản lý tin đăng</a>
              </Link>{' '}
              để quản lý các tin đã đăng trên hệ thống.
            </p>
            <p className={styles.desc}>
              + <strong>Đẩy tin</strong>: có nghĩa là làm mới tin, đưa tin lên đầu ở từng mục, bạn đang đăng tin thường,
              thì up lên top sẽ ở đầu danh sách tin thường, bạn đang đăng tin VIP thì ở đầu danh sách tin VIP (Vip có 2
              loại VIP VÀNG và SUPPER VIP)
            </p>
            <p className={styles.desc}>
              + <strong>Nâng cấp VIP</strong>: là chức năng giúp thay đổi vị trí hiện thị của tin đăng lên vị trí cao
              hơn tiếp cận được nhiều người xem hơn.
            </p>
            <p className={styles.desc}>
              + <strong>Sửa</strong>: có nghĩa là bạn có thể sửa lại tin bạn đã đăng như nội dung, tiêu đề, hoặc giá
              vvv...
            </p>
            <p className={styles.desc}>
              + <strong>Đã cho thuê</strong>: chức năng này rất hay, khi bấm vào tin đăng của bạn sẽ ko còn hiện trên
              mục tìm kiếm, người khác sẽ không thấy tin đăng của bạn, nhưng tin vẫn còn lưu trên website, khi nào bạn
              cần đăng lại thì có thể &nbsp;nhấp vào để tin hiển thị lại.
            </p>
            <p className={styles.desc}>
              + <strong>Xoá</strong>: có nghĩa là bạn sẽ xoá bỏ vĩnh viễn tin đăng của mình.
            </p>
          </div>
        </article>
        <section className={styles['section']}>
          <div className={styles.section_content}>
            <h4 className={styles.section_title}>Tại sao lại chọn nhatro247.com?</h4>
            <p className={styles.desc1}>
              Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng nhatro247.com tự hào là trang web đứng top google về các
              từ khóa:{' '}
              <Link href="/cho-thue-phong-tro" title="Cho thuê phòng trọ" className={styles.link}>
                <a className={styles.link}>
                  <strong>cho thuê phòng trọ</strong>
                </a>
              </Link>
              , <strong>nhà trọ</strong>,{' '}
              <Link href="/nha-cho-thue" title="Cho thuê nhà nguyên căn" className={styles.link}>
                <a className={styles.link}>
                  <strong>thuê nhà nguyên căn</strong>
                </a>
              </Link>
              ,{' '}
              <Link href="/cho-thue-can-ho" title="Cho thuê căn hộ" className={styles.link}>
                <a className={styles.link}>
                  <strong>cho thuê căn hộ</strong>
                </a>
              </Link>
              ,{' '}
              <Link href="/tim-nguoi-o-ghep" title="Tìm người ở ghép" className={styles.link}>
                <a className={styles.link}>
                  <strong>tìm người ở ghép</strong>
                </a>
              </Link>
              ,{' '}
              <Link href="/cho-thue-mat-bang" title="Cho thuê mặt bằng" className={styles.link}>
                <a className={styles.link}>
                  <strong>cho thuê mặt bằng</strong>
                </a>
              </Link>
              ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch nhanh
              hơn, tiết kiệm chi phí hơn
            </p>
            <div className={styles.whyus_countup}>
              <div className={styles.whyus_countup_item}>
                <span className={styles.whyus_countup_item_number}>116.998+</span>
                <span className={styles.whyus_countup_item_text}>Thành viên</span>
              </div>
              <div className={styles.whyus_countup_item}>
                <span className={styles.whyus_countup_item_number}>103.348+</span>
                <span className={styles.whyus_countup_item_text}>Tin đăng</span>
              </div>
              <div className={styles.whyus_countup_item}>
                <span className={styles.whyus_countup_item_number}>300.000+</span>
                <span className={styles.whyus_countup_item_text}>Lượt truy cập/tháng</span>
              </div>
              <div className={styles.whyus_countup_item}>
                <span className={styles.whyus_countup_item_number}>2.500.000+</span>
                <span className={styles.whyus_countup_item_text}>Lượt xem/tháng</span>
              </div>
            </div>
            <br />
            <br />
            <h5 className={styles.section_title}>Chi phí thấp, hiệu quả tối đa</h5>
            <div
              className={styles.clearfix}
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '10px 0',
              }}
            >
              <div data-v-78fbd3bf="" className="icon-star">
                <svg
                  height="12"
                  className="fill-[#ffd261] h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
              </div>
              <div data-v-78fbd3bf="" className="icon-star">
                <svg
                  height="12"
                  className="fill-[#ffd261] h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
              </div>
              <div data-v-78fbd3bf="" className="icon-star">
                <svg
                  height="12"
                  className="fill-[#ffd261] h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
              </div>
              <div data-v-78fbd3bf="" className="icon-star">
                <svg
                  height="12"
                  className="fill-[#ffd261] h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
              </div>
              <div data-v-78fbd3bf="" className="icon-star">
                <svg
                  height="12"
                  className="fill-[#ffd261] h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
              </div>
            </div>
            <p className={styles.testimonial}>
              {
                '"Trước khi biết website nhatro247, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết website nhatro247.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài."'
              }{' '}
              <br />
              <span
                style={{
                  fontStyle: 'normal',
                  display: 'block',
                  marginTop: 10,
                }}
              >
                Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM)
              </span>
            </p>
            <br />
            <h6 className={styles['section_title']}>Bạn đang có phòng trọ / căn hộ cho thuê?</h6>
            <p className={styles.desc1}>Không phải lo tìm người cho thuê, phòng trống kéo dài</p>
            <br />
            <Link href="" className={styles['but']} style={{ padding: '10px 30px' }}>
              <a className={styles['but']} style={{ padding: '10px 30px' }} rel="nofollow">
                Đăng tin ngay
              </a>
            </Link>
          </div>
        </section>
        <section className={styles['section-support']}>
          <div className={styles['section-content clearfix']}>
            <div className={styles['support-bg']}>
              <Image src="/images/contactus.png" height={200} width={600} />
            </div>
            <div className={styles['list-support']}>
              <div className={styles['list-support-title']}>Liên hệ với chúng tôi nếu bạn cần hỗ trợ:</div>
              <div className={styles['support-item']}>
                <span className={styles['support-item-title']}>Hỗ trợ thanh toán</span>
                <a rel="nofollow" href="tel:0917686101">
                  Điện thoại: 0917686101
                </a>
                <Link rel="nofollow" target="_blank" href="">
                  Zalo: 0917686101
                </Link>
              </div>
              <div className={styles['support-item']}>
                <span className={styles['support-item-title']}>Hỗ trợ đăng tin</span>
                <a rel="nofollow" href="tel:0902657123">
                  Điện thoại: 0902657123
                </a>
                <Link rel="nofollow" target="_blank" href="">
                  Zalo: 0902657123
                </Link>
              </div>
              <div className={styles['support-item']}>
                <span className={styles['support-item-title']}>Hotline 24/7</span>
                <a rel="nofollow" href="tel:0917686101">
                  Điện thoại: 0917686101
                </a>
                <Link rel="nofollow" target="_blank" href="">
                  <a> Zalo: 0917686101</a>
                </Link>
              </div>
              <Link className={styles['btn']} rel="nofollow" href="/lien-he">
                <a className={styles['btn']}>Gửi liên hệ</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GioiThieu;
