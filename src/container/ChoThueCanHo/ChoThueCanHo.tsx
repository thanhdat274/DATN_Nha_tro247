import FilterOption from '@/components/FilterOption';
import ListData from '@/components/ListData';
import React from 'react';

export interface IChoThueCanHoProps {
  canho: any;
}

export default function ChoThueCanHo(props: IChoThueCanHoProps) {
  const { canho } = props;

  return (
    <div className="canho-container">
      <FilterOption />
      <div className=" flex flex-col sm:flex-row sm:gap-4 sm:my-2 ">
        <div className="sm:basis-3/4 sm:shadow-lg sm:w-full sm:border-solid sm:border sm:p-2 sm:rounded-lg">
          <ListData data={canho} />
        </div>

        <div className="sm:basic-1/4 sm:shadow-lg sm:h-full">text</div>
      </div>
    </div>
  );
}
