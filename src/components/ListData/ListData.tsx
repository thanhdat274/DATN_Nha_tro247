import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface IListDataProps {
  data: any;
}

export default function ListData(props: IListDataProps) {
  const { data } = props;

  return (
    <div className="ListData-container max-w-lg">
      <p>danh sach</p>
      {data.map((item: any, index: number) => {
        return (
          <Link key={item.id + 'link'} href={`/cho-thue-can-ho/${item.id}`}>
            <a>
              <div key={index} className="box-item flex flex-row w-auto">
                <div className="image base-2/5 min-w-fit">
                  <Image height={360} width={360} src="https://iili.io/S1JrBe.png" alt="https://iili.io/S1JrBe.png" />
                </div>
                <div className="title base-3/5">{item.title}</div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
