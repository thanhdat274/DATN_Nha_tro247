import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import styles from './blog.module.css';

export interface IBlogDetailProps {
  canho?: any;
}

export default function BlogDetail(props: IBlogDetailProps) {
  const { canho } = props;

  const router = useRouter();
  return (
    <div className='container mx-auto'>
      <main className={styles.main}>
        <div className="w-full mx-auto h-auto flex gap-[20px] justify-between">
          <div className={styles['box-left']}>
            <article className={styles['the-article']}>
              <div className={styles['breadcrumb']}>
                <ul className="flex text-[0.875rem]">
                  <li className="text-[#1266dd]  hover:text-[#ff6600]">
                    <Link href="/">
                      <a>
                        <span>Trang chủ</span>
                      </a>
                    </Link>
                  </li>
                  <li className="mx-[10px]">{'>'}</li>
                  <li className="text-[#1266dd]  hover:text-[#ff6600]">
                    <Link href="/">
                      <a>
                        <span>Blog</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <header className={styles['page-header']}>
                <h1 className={styles['page-h1']}>Điểm nổi bật của căn hộ Legacy Central là gì?</h1>
              </header>
              <div className={styles['article-summary']}>
                <p>
                  Tiếp nối thành công vang dội từ dự án căn hộ The EastGate tại Làng Đại học. Kim Oanh Group tiếp tục đà
                  bứt phá với việc quyết định triển khai dự án <strong>căn hộ Legacy Central</strong>. Đây là sản phẩm
                  căn hộ thuộc phân khúc giá rẻ dưới 1 tỷ tại Bình Dương đặc biệt được nhà đầu tư này phát triển và phân
                  phối độc quyền.
                </p>
              </div>
              <div className={styles['article-main-content']}>
                <p className="mb-[16px]">
                  Khởi công chính thức từ tháng 7 năm 2020, đợt mở bán đầu tiên của dự án đã “tẩu tán” hoàn toàn 300 căn
                  hộ. Vậy, điểm nổi bật của căn hộ Legacy Central là gì? Lý do nào khiến chúng được yêu thích đến vậy?
                  Hãy cùng{' '}
                  <a title="phongtro123.com" href="https://phongtro123.com/">
                    phongtro123.com
                  </a>
                  &nbsp;tìm hiểu về thông tin này trong bài viết dưới đây nhé!
                </p>
                <h2 className="my-[19px]">1. Vị trí xây dựng căn hộ Legacy Central mang đến nhiều lợi ích gì?</h2>
                <p className="my-[16px]">
                  Khi tìm hiểu về bất kỳ dự án bất động sản nào, yếu tố về vị trí bao giờ cũng đóng vai trò quan trọng
                  bậc nhất. Chúng tác động trực tiếp đến hệ thống giao thông, khả năng kết nối và hàng loạt các tiện
                  ích. <strong>Căn hộ Legacy Central</strong> may mắn sở hữu trong mình đầy đủ các yếu tố của một dự án
                  chất lượng với yếu tố vàng về vị trí.
                </p>
                <p className="my-[16px]">
                  <em>Vị trí căn hộ</em>
                </p>
                <p className="my-[16px]">
                  Tọa lạc tại đường Thuận Giao 25, phường Thuận Giao, TP Thuận An, tỉnh Bình Dương. Chung cư Legacy
                  Central nằm tại vị trí đối diện với trường THCS Thuận Giao và nằm trong khu vực dân cư đông đúc, sầm
                  uất.
                </p>
                <p className="my-[16px]">
                  Trong một vài năm trở lại đây, tỉnh Bình Dương là một trong những tỉnh phía nam có tốc độ phát triển
                  kinh tế đáng kinh ngạc. Không đơn thuần là “sân sau” của thành phố Hồ Chí Minh, đây còn là khu vực
                  trực tiếp nhận được sự phát triển, thu hút mạnh mẽ của các nhà đầu tư. Bình Dương hiện thủ phủ công
                  nghiệp đứng đầu cả nước.
                </p>
                <figure style={{ textAlign: 'center' }}>
                  <img
                    src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/03/09/vi-tri-legacy-central_1646808274.jpg"
                    alt="Vị trí căn hộ Legacy Central"
                    width={900}
                    height={644}
                  />
                  <figcaption className="m-[10px]">Vị trí căn hộ Legacy Central</figcaption>
                </figure>
                <p className="my-[16px]">
                  Sự bứt phá về kinh tế đã tạo đà cho bất động sản, đặc biệt là nhu cầu về các dự án căn hộ chung cư tại
                  đây ngày càng tăng cao. Sự xuất hiện của dự án Legacy Central được xem là cơn mưa tưới mát cho thị
                  trường bất động sản Bình Dương vốn đang rất khát những căn hộ giá rẻ, căn hộ cho người thu nhập thấp.
                </p>
                <p className="my-[16px]">
                  <em>Liên kết vùng của dự án căn hộ Legacy Central</em>
                </p>
                <p className="my-[16px]">
                  Legacy Central là dự án sở hữu vị trí đầy thuận lợi với địa thế cực đẹp. Trước tiên, dự án nằm ngay
                  tại khu vực tiếp giáp với thành phố Hồ Chí Minh. Thông qua hệ thống cơ sở hạ tầng hiện nay đã được
                  đồng bộ với các tuyến huyết mạch: Quốc lộ 1A, Quốc lộ 13, đường ĐT 743, cầu Đồng Nai, bến xe Miền
                  Đông, cầu Phú Long vượt sông Sài Gòn, …Cư dân sẽ không phải mất quá nhiều thời gian để có thể di
                  chuyển vào các quận trung tâm: quận 1, 2, Thủ Đức,…
                </p>
                <figure style={{ textAlign: 'center' }}>
                  <img
                    src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/03/09/tien-ich-lien-ket-vung-du-an-legacy-central_1646808236.jpg"
                    alt="Liên kết vùng của dự án căn hộ Legacy Central"
                    width={900}
                    height={388}
                  />
                  <figcaption className="m-[10px]">Liên kết vùng của dự án căn hộ Legacy Central</figcaption>
                </figure>
                <p className="my-[16px]">
                  Không chỉ vậy,{' '}
                  <Link href={''} target="_blank">
                    <a title="căn hộ Legacy Central">căn hộ Legacy Central</a>
                  </Link>{' '}
                  cũng nằm không cách thành phố Thuận An không quá xa. Khi kết nối trực tiếp với 2 tuyến giao thông lớn:
                  cao tốc Mỹ phước Tân vạn, Quốc lộ 13, cư dân của căn hộ sẽ chỉ mất khoảng 5 phút về Trung tâm thành
                  phố Thuận An, 10 phút để đến với tp. Thủ Dầu Một. Đặc biệt, chỉ mất khoảng 8km để đến Đại lộ Bình
                  Dương – Quốc lộ. Từ đây, luồng giao thông di chuyển về các tỉnh Đông Nam Bộ trở nên thông suốt và dễ
                  dàng hơn bao giờ hết.
                </p>
                <p className="my-[16px]">
                  Cuối cùng, liên kết vùng của dự án được đánh giá vô cùng lý tưởng bởi chuỗi tiện ích bao quanh các căn
                  hộ có độ hoàn thiện tối đa. Trong bán kính 5km, cư dân của dự án có thể dễ dàng để đến với: chợ Lái
                  Thiêu, siêu thị Nhật Bản Aeon Mall, Lotte Mart, Minh Sáng Plaza, bệnh viện Quốc tế Hạnh Phúc, bệnh
                  viện Đa khoa Thuận An, KCN VSIP 1, KCN Đồng An…
                </p>
                <h2 className="my-[19px]">2. Tiện ích nội khu căn hộ Legacy Central</h2>
                <p className="my-[16px]">
                  Với mong muốn kiến tạo những công trình chất lượng, mang lại cuộc sống tiện nghi, hiện đại cho cư dân.
                  Legacy Central được quy hoạch với mô hình khép kín bao gồm các tiện ích hiện đại được lồng ghép, tích
                  hợp ngay chân tòa căn hộ. Hệ thống các tiện ích nội khu của dự án dày đặc, có sự bố trí khoa học nhằm
                  mang lại cho cư dân trải nghiệm tiện nghi tốt nhất.
                </p>
                <figure style={{ textAlign: 'center' }}>
                  <img
                    src="https://pt123.cdn.static123.com/images/2022/03/09/tien-ich-noi-khu-du-an-legacy-central_1646808177.jpg"
                    alt="Tiện ích nội khu căn hộ Legacy Central"
                    width={1200}
                    height={790}
                  />
                  <figcaption className="m-[10px]">Tiện ích nội khu căn hộ Legacy Central</figcaption>
                </figure>
                <p className="my-[16px]">
                  Các tiện ích hấp dẫn bậc nhất có thể kể đến tại <strong>căn hộ Legacy Central</strong> hiện nay bao
                  gồm:
                </p>
                <p className="my-[16px]">- Trung tâm thương mại, khu shophouse, siêu thị, cửa hàng tiện ích.</p>
                <p className="my-[16px]">- Nhà trẻ, khu vui chơi trẻ em.</p>
                <p className="my-[16px]">- Hồ bơi tràn bờ.</p>
                <p className="my-[16px]">- Phòng tập gym, yoga,…</p>
                <p className="my-[16px]">
                  - Công viên cây xanh, vườn hoa, hồ cảnh quan, vườn BBQ – tổ chức tiệc nướng, đường nội khu.
                </p>
                <p className="my-[16px]">- Hệ thống PCCC tiêu chuẩn, báo cháy tự động.</p>
                <p className="my-[16px]">- Hầm xe trang bị nhiều thiết bị hiện đại…</p>
                <p className="my-[16px]">- Hệ thống an ninh thẻ từ, camera giám sát 24/7.</p>
                <p className="my-[16px]">
                  ===&gt; Xem thêm: những căn hộ cho thuê mới nhất tại Bình Dương <br />
                  <Link href={''} target="_blank">
                    <a title="" className="text-[#1266dd]  hover:text-[#ff6600]">
                      https://thuecanho123.com/binh-duong.html
                    </a>
                  </Link>
                </p>
                <h2 className="my-[19px]">3. Tiện ích ngoại khu căn hộ Legacy Central</h2>
                <p className="my-[16px]">
                  Cùng với các tiện ích nội khu đầy đủ, hấp dẫn, <strong>chung cư Legacy Central</strong> cũng sở hữu
                  những kế thừa về tiện ích ngoại khu chất lượng. Điều này đến từ những giá trị về vị trí vô cùng đắc
                  địa mà dự án sở hữu.
                </p>
                <p className="my-[16px]">
                  Kim Oanh Group đã lựa chọn địa điểm để khởi công dự án đầy tính toán thông minh. Cư dân của căn hộ
                  Legacy Central sẽ không phải đi quá xa mà vẫn có thể sử dụng đầy đủ các tiện ích chất lượng bao gồm:
                  trường đại học Kinh tế – Kỹ thuật Bình Dương, trường THCS Thuận Giao, chợ Thuận Giao, siêu thị Nhật
                  Bản Aeon Mall, Lotte Mart, Minh Sáng Plaza, bệnh viện Quốc tế Hạnh Phúc,…
                </p>
                <p className="my-[16px]">
                  Như vậy, hơn cả trải nghiệm sống, chủ nhân của Legacy Central sẽ được sống trong một không gian mà ở
                  đó sự hiện đại- tiện nghi hội tụ đầy đủ. Chắc chắn rằng với hệ thống các tiện ích đan cài. Đây sẽ là
                  không gian sống đáng mơ ước dành cho bạn tham khảo, lựa chọn.
                </p>
                <h2 className="my-[19px]">4. Mặt bằng và thiết kế căn hộ Legacy Central</h2>
                <p className="my-[16px]">
                  Dự án chung cư Legacy Central, Bình Dương là “con cưng” được chủ đầu tư Kim Oanh Group xây dựng trên
                  quỹ đất rộng hơn 1ha. Kim Oanh Group đã dành cho các căn hộ Legacy Central sự nghiên cứu nghiêm túc về
                  thiết kế mặt bằng. Trong đó, các block được phân bố một cách khoa học, có sự kết nối nhưng đồng thời
                  vẫn đảm bảo sự thông thoáng, thoải mái.
                </p>
                <p className="my-[16px]">
                  Mặc dù vậy, mật độ xây dựng toàn khu lại tương đối thấp, chỉ đạt 40%. Trong đó, quy mô bao gồm 2 block
                  cao 25 tầng nổi và 2 tầng hầm. Phần lớn diện tích của dự án là khu vực dành cho hồ cảnh quan, cây xanh
                  cũng như các tiện ích. Vì vậy, không gian nơi đây luôn rất thông thoáng, dễ chịu.
                </p>
                <figure style={{ textAlign: 'center' }}>
                  <img
                    src="https://pt123.cdn.static123.com/images/2022/03/09/mat-bang-va-thiet-ke-can-ho-legacy-central_1646808121.jpg"
                    alt="Mặt bằng và thiết kế căn hộ Legacy Central"
                  />
                  <figcaption className="m-[10px]">Mặt bằng và thiết kế căn hộ Legacy Central</figcaption>
                </figure>
                <p className="my-[16px]">
                  Diện tích các căn hộ thuộc dự án rất đa dạng trung bình từ 60 – 100m2 với 1 – 3 phòng ngủ. Điều này
                  giúp mang lại sự thoải mái khi lựa chọn không gian sống dành cho khách hàng. Bên trong mỗi không gian
                  sống, các khu vực phòng ốc được bố trí một cách khoa học, tối ưu về diện tích. Các phòng chức năng
                  được được đảm bảo nhu cầu sử dụng của gia đình. Mọi căn hộ của dự án đều có khu vực ban công đón nắng
                  gió. Lối thiết kế mở cũng giúp mang lại không gian thoải mái, tươi mát dành cho gia chủ.
                </p>
                <p className="my-[16px]">
                  Hiện tại, nội thất của chung cư Legacy Central đã được kiến tạo hoàn thiện. Với đầy đủ các thiết bị cơ
                  bản. Như vậy, ngay khi dọn vào sinh sống, cư dân sẽ có thể ở luôn mà không cần bày trí thêm bất kì vật
                  dụng nào. Đây là ưu thế rất lớn mà không phải dự án bất động sản nào cũng có được.
                </p>
                <h2 className="my-[19px]">5. Giá thuê căn hộ Legacy Central hấp dẫn</h2>
                <p className="my-[16px]">
                  Cập nhật giá thuê <strong>căn hộ Legacy Central</strong> mới nhất dưới đây chắc chắn sẽ khiến khách
                  hàng bất ngờ. Với quy hoạch để trở thành dòng căn hộ giá rẻ, thế nhưng với những gì mà căn hộ sở hữu.
                  Đây thực sự là không gian đáng để bạn chọn thuê lâu dài.
                </p>
                <p className="my-[16px]">- Căn hộ Studio với diện tích 32m2 có giá thuê 5 triệu/tháng.</p>
                <p className="my-[16px]">- Căn hộ 1 phòng ngủ với diện tích 45,8m2 có giá thuê 7 triệu/tháng.</p>
                <p className="my-[16px]">-&nbsp;Căn hộ 2 phòng ngủ với diện tích 60m2 có giá thuê 8-9 triệu/tháng.</p>
                <h2 className="my-[19px]">Lời kết</h2>
                <p className="my-[16px]">
                  Hi vọng rằng, với những thông tin đánh giá chi tiết về căn hộ Legacy Central trên sẽ mang lại cho bạn
                  nhiều tham khảo hữu ích. Chọn thuê căn hộ {'('}
                  <Link href={''} target="_blank">
                    <a title="" className="text-[#1266dd]  hover:text-[#ff6600]">
                      https://thuecanho123.com/
                    </a>
                  </Link>
                  {'}'} giá rẻ tại Bình Dương đang là mục đích của rất nhiều người. Vì vậy, chắc chắn rằng dòng căn hộ
                  này đang là đích đến mà nhiều người hướng đến. Hãy nhanh tay liên hệ để có được căn hộ thuê trong mơ
                  tại Legacy Central bạn nhé!
                </p>
              </div>
              <div className={styles['article-tags']}>
                <span>Từ khóa:</span>
                <div className={styles['tags-content']}>
                  <span>Tin tức thị trường</span>
                </div>
              </div>
            </article>

            <section className={styles['section']}>
              <div className={styles['section-header']}>
                <span className={styles['section-title']}>Có thể bạn quan tâm</span>
              </div>
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
}
