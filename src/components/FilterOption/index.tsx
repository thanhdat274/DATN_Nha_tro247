import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  data?: any;
};

const FilterOption = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="w-full bg-yellow-300 p-2 sm:rounded">
      <form className="w-full flex flex-col gap-2 sm:flex-row sm:gap-4 sm:my-2 " onSubmit={handleSubmit(onSubmit)}>
        <div className="name w-full ">
          <input
            className="w-full px-2 h-10  border-solid text-sm border border-gray-400 focus:ring-0 focus:outline-0 focus:border-black rounded"
            type="text"
            placeholder="Name"
            // {...register('name', { required: true, maxLength: 100 })}
          />
          <div className="text-red-600">{errors.name && 'First name is required'}</div>
        </div>

        <div className="type w-full ">
          <input
            className="w-full px-2 h-10  border-solid text-sm border border-gray-400 focus:ring-0 focus:outline-0 focus:border-black rounded"
            type="text"
            placeholder="Name"
            // {...register('type', { required: true, maxLength: 100 })}
          />
          <div className="text-red-600">{errors.name && 'First name is required'}</div>
        </div>

        <div className="type w-full ">
          <input
            className="w-full px-2 h-10  border-solid text-sm border border-gray-400 focus:ring-0 focus:outline-0 focus:border-black rounded"
            type="text"
            placeholder="Name"
            // {...register('type', { required: true, maxLength: 100 })}
          />
          <div className="text-red-600">{errors.name && 'First name is required'}</div>
        </div>

        <div className="type w-full ">
          <input
            className="w-full px-2 h-10  border-solid text-sm border border-gray-400 focus:ring-0 focus:outline-0 focus:border-black rounded"
            type="text"
            placeholder="Name"
            // {...register('type', { required: true, maxLength: 100 })}
          />
          <div className="text-red-600">{errors.name && 'First name is required'}</div>
        </div>

        <button className="w-full border-solid rounded bg-blue-600 text-white py-2 text-xl sm:h-10 " type="submit">
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default FilterOption;
