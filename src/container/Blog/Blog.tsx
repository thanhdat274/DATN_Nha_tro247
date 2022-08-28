import Link from 'next/link';
import React from 'react';
import styles from './Blog.module.css';
import Image from 'next/image';

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className='container mx-auto'>
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <ul className="flex text-[0.875rem]">
            <li className="text-[#1266dd]  hover:text-[#ff6600]">
              <Link href="/">
                <a>
                  <span>Trang chủ</span>
                </a>
              </Link>
            </li>
            <li className="mx-[10px]">{'>'}</li>
            <li className="link last">
              <span> Blog</span>
            </li>
          </ul>
        </div>
        <header className="mb-[15px]">
          <h1 className={styles.page_h1}>Blog</h1>
        </header>

        <div className="w-full mx-auto h-auto flex gap-[20px] justify-between">
          <div className={styles['box-left']}>
            <section className={styles['section']}>
              <ul className={styles['blog-listing']}>
                <li className={styles['article-item']}>
                  <Link href="/">
                    <a>
                      <figure className={styles['figure']}>
                        <img
                          className={styles['img']}
                          src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/03/09/legacy-central-binh-duong_1646808335.jpg"
                          data-src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/03/09/legacy-central-binh-duong_1646808335.jpg"
                          data-loaded="true"
                        />
                      </figure>
                      <div className={styles['article-meta']}>
                        <h6 className={styles['article-title']}>Điểm nổi bật của căn hộ Legacy Central là gì?</h6>
                        <p className={styles['article-summary']}>
                          Khởi công chính thức từ tháng 7 năm 2020, đợt mở bán đầu tiên của dự án đã “tẩu tán” hoàn toàn
                          300 căn hộ. Vậy, điểm nổi bật của căn hộ Legacy…
                        </p>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </section>
            <ul className={styles['pagination']}>
              <li className={styles['page-item']}>
                <span className={styles['page-link']}>1</span>
              </li>
              <li className={styles['page-item']}>
                <Link href={''}>
                  <a className={styles['page-link']}>2</a>
                </Link>
              </li>
              <li className={styles['page-item']}>
                <Link href={''}>
                  <a className={styles['page-link']}>3</a>
                </Link>
              </li>
              <li className={styles['page-item']}>
                <Link href={''}>
                  <a className={styles['page-link']} rel="next">
                    »»
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles['box-right']}>
            <section className={styles['section']}>
              <div className={styles['section-header']}>
                <span className={styles['section-title']}>Danh mục cho thuê</span>
              </div>
              <ul className={styles['list-links']}>
                <li>
                  <h2>
                    <a href="" title="Cho thuê phòng trọ">
                      Cho thuê phòng trọ
                    </a>
                  </h2>
                  <span className={styles['count']}>(49.212)</span>
                </li>
                <li>
                  <h2>
                    <a href="" title="Cho thuê nhà nguyên căn">
                      Cho thuê nhà nguyên căn
                    </a>
                  </h2>
                  <span className={styles['count']}>(8.954)</span>
                </li>
                <li>
                  <h2>
                    <a href="" title="Cho thuê căn hộ">
                      Cho thuê căn hộ
                    </a>
                  </h2>
                  <span className={styles['count']}>(9.520)</span>
                </li>
                <li className={styles['sub']}>
                  <h2>
                    <a href="" title="Cho Thuê Căn Hộ Chung Cư Mini">
                      Cho thuê căn hộ mini
                    </a>
                  </h2>
                </li>
                <li className={styles['sub']}>
                  <h2>
                    <a href="" title="Cho Thuê Căn Hộ Dịch Vụ">
                      Cho thuê căn hộ dịch vụ
                    </a>
                  </h2>
                </li>
                <li>
                  <h2>
                    <a href="" title="Cho thuê mặt bằng">
                      Cho thuê mặt bằng
                    </a>
                  </h2>
                  <span className={styles['count']}>(2.050)</span>
                </li>
                <li>
                  <h2>
                    <a href="" title="Tìm người ở ghép">
                      Tìm người ở ghép
                    </a>
                  </h2>
                  <span className={styles['count']}>(14.608)</span>
                </li>
              </ul>
            </section>

            <section className={styles['section']}>
              <div className={styles['section-header']}>
                <span className={styles['section-title']}>Tin mới đăng</span>
              </div>
              <ul className={styles['post-listing']}>
                <li className={styles['post-item']} post-id={605820}>
                  <a href="/can-ho-1pn-full-noi-that-co-ban-cong-ngay-phu-my-hung-pr605820.html">
                    <figure className={styles['figure1']}>
                      <Image
                        className="lazy_done"
                        src="/images/image-blog.jpg"
                        alt="⭐️ Căn hộ 1PN full nội thất có ban công ngay Phú Mỹ Hưng"
                        height={100}
                        width={100}
                      />
                    </figure>
                    <div className={styles['post-meta']}>
                      <span className={styles['post-title']} style={{ color: '#055699' }}>
                        {' '}
                        ⭐️ Căn hộ 1PN full nội thất có ban công…{' '}
                      </span>
                      <span className={styles['post-price']}>12 triệu/tháng</span>
                      <time className={styles['post-time']} title="Thứ 6, 22:47 12/08/2022">
                        18 phút trước
                      </time>
                    </div>
                  </a>
                </li>
              </ul>
            </section>

            <section className={styles['section']} style={{}}>
              <div className={styles['section-header']} style={{}}>
                <span className={styles['section-title']} style={{}}>
                  Có thể bạn quan tâm
                </span>
              </div>
              <ul className={styles['list-links']}>
                <li>
                  <a href="/news/hop-dong-thue-nha-tro-phong-tro" title="Mẫu hợp đồng cho thuê phòng trọ" style={{}}>
                    Mẫu hợp đồng cho thuê phòng trọ
                  </a>
                </li>
                <li>
                  <a
                    href="/kinh-nghiem/kinh-nghiem-thue-phong-tro-tranh-bi-lua-gat.html"
                    title="Cẩn thận các kiểu lừa đảo khi thuê phòng trọ"
                    style={{}}
                  >
                    Cẩn thận các kiểu lừa đảo khi thuê phòng trọ
                  </a>
                </li>
                <li>
                  <a
                    href="/kinh-nghiem/chia-se-10-kinh-nghiem-khi-thue-phong-tro-cho-sinh-vien.html"
                    title="Kinh nghiệm thuê phòng trọ cho Sinh Viên"
                    style={{}}
                  >
                    Kinh nghiệm thuê phòng trọ Sinh Viên
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

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

export default Blog;
