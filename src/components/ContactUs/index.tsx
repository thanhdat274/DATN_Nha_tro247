import { CONTACT_US } from '@/util/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IContactUsProps {}

interface IItem {
  title: string;
  phoneNumber: string;
  zalo: string;
}

export default function ContactUs(props: IContactUsProps) {
  return (
    <div className="contact-us flex gap-4 flex-col justify-center items-center sm:rounded-md sm:border-dashed  sm:border-4 sm:border-indigo-400 py-8">
      <div className="image">
        <Image src={'/images/contactus.png'} height={200} width={600} alt="contact-us" />
      </div>
      <div className="info-contact block sm:flex sm:gap-4 md:gap-8 lg:gap-12">
        {CONTACT_US.map((item: IItem, index: number) => (
          <div key={index} className="support-payment py-2 flex flex-col items-center">
            <div className="title uppercase font-bold text-orange-400">{item.title}</div>
            <div className="phoneNumber text-2xl font-bold text-slate-700">{item.phoneNumber}</div>
            <div className="zalo text-2xl font-bold text-slate-700">{item.zalo}</div>
          </div>
        ))}
      </div>
      <button className="bg-blue-600 rounded py-2 px-4 text-white font-bold">
        <Link href="/lien-he">
          <a>Gửi liên hệ</a>
        </Link>
      </button>
    </div>
  );
}
