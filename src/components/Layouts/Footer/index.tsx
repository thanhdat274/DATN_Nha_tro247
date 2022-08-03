import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="container-footer mx-auto flex flex-wrap gap-6  sm:gap-0">
      <div className="footer-intro w-full px-0 sm:w-1/2 sm:px-4 md:w-1/4 flex flex-col">
        <Image height={80} width="100%" src="/images/logo.svg" alt="footer-logo" />
        <br />
        <div className="footer-intro-title">
          Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ.
        </div>
      </div>

      <div className="footer-info w-full px-0 sm:w-1/2 sm:px-4 md:w-1/4 flex flex-col">
        <div className="footer-info-title font-bold">Về PHONGTRO123.COM</div>
        <div className="footer-info-home">
          <Link href="/">
            <a>Trang chủ</a>
          </Link>
        </div>

        <div className="footer-info-introduce">
          <Link href="/introduce">
            <a>Giới thiệu</a>
          </Link>
        </div>

        <div className="footer-info-blog">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>

        <div className="footer-info-operating-regulations">
          <Link href="/operating-regulations">
            <a>Quy chế hoạt động</a>
          </Link>
        </div>
      </div>

      <div className="footer-support w-full px-0 sm:w-1/2 sm:px-4 md:w-1/4 flex flex-col">
        <div className="footer-support-title font-bold">Hỗ trợ khách hàng</div>

        <div className="footer-info-blog">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>

        <div className="footer-info-operating-regulations">
          <Link href="/operating-regulations">
            <a>Quy chế hoạt động</a>
          </Link>
        </div>
      </div>

      <div className="footer-contact w-full px-0 sm:w-1/2 sm:px-4 md:w-1/4">
        <div className="footer-contact-platform">
          <div className="footer-contact-platform-title font-bold">Liên hệ với chúng tôi</div>

          <div className="footer-contact-platform-icon flex">
            <FontAwesomeIcon height={50} width={50} icon={faStream} />
            <FontAwesomeIcon height={50} width={50} icon={faStream} />

            <FontAwesomeIcon height={50} width={50} icon={faStream} />
            <FontAwesomeIcon height={50} width={50} icon={faStream} />
            <FontAwesomeIcon height={50} width={50} icon={faStream} />
          </div>
        </div>
        <div className="footer-contact-payment">
          <div className="footer-contact-payment-title font-bold">Phương thức thanh toán</div>

          <div className="footer-contact-payment-icon flex">
            <FontAwesomeIcon height={50} width={50} icon={faStream} />
            <FontAwesomeIcon height={50} width={50} icon={faStream} />

            <FontAwesomeIcon height={50} width={50} icon={faStream} />
            <FontAwesomeIcon height={50} width={50} icon={faStream} />
            <FontAwesomeIcon height={50} width={50} icon={faStream} />
          </div>
        </div>
      </div>
    </footer>
  );
}
