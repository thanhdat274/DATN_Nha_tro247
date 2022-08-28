import React from 'react';
import Seo from '@/components/seo';
import Footer from '../Footer';
import Header from '../Header';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="w-full bg-white" key={'layout'}>
      <Seo
        data={{
          title: 'Nhà trọ 24/7 | Tìm trọ, đăng bài và tìm người ở chung tốt nhất Việt Nam',
          description: 'Nơi tìm kiếm nhà trọ , cho thuê phòng trọ tốt nhất Việt Nam',
          thumbnailUrl: 'https://i.ibb.co/cg0dw5n/7359334a75de4d73b9c2dfdd27257de4.png',
          url: 'https://nhatro247.vercel.app',
        }}
      />

      <Header />

      <div className="mx-auto mb-4 sm:mb-20 ">
        <main>{props.children}</main>
      </div>
      <div className="container mx-auto">
        <Footer key={'footer'} />
      </div>
    </div>
  );
}
