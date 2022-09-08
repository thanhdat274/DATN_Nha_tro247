import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-2">
        <label className="text-xl" htmlFor="">
          Full name
        </label>
        <input
          className="w-full h-10  border-solid text-xl border border-black focus:ring-0 focus:outline-0"
          type="text"
          //   placeholder="Full name"
          {...register('Full name', { required: true, max: 2, min: 2, maxLength: 100 })}
        />
      </div>

      <div className="py-2">
        <label htmlFor="" className="text-xl">
          Email
        </label>
        <input
          className="w-full h-10  border-solid text-xl border border-black focus:ring-0 focus:outline-0"
          type="text"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>

      <div className="py-2">
        <label htmlFor="" className="text-xl">
          Mobile number
        </label>
        <input
          className="w-full h-10  border-solid text-xl border border-black focus:ring-0 focus:outline-0"
          type="tel"
          {...register('Mobile number', { minLength: 6, maxLength: 12 })}
        />
      </div>

      <div className="flex gap-2">
        <div className="py-2 w-1/2">
          <label htmlFor="" className="text-xl">
            Password
          </label>
          <input
            className="w-full h-10  border-solid text-xl border border-black focus:ring-0 focus:outline-0"
            type="password"
            {...register('Password', { required: true, max: 8, min: 8, maxLength: 50 })}
          />
        </div>

        <div className="py-2 w-1/2">
          <label htmlFor="" className="text-xl">
            Re-password
          </label>
          <input
            className="w-full h-10  border-solid text-xl border border-black focus:ring-0 focus:outline-0"
            type="text"
            {...register('Re_Password', { required: true, max: 8, min: 8, maxLength: 100 })}
          />
        </div>
      </div>

      <input className="w-full " type="submit" />
    </form>
  );
}
