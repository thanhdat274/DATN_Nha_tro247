import WhyChose from '@/components/WhyChose';
import React from 'react';
import { useForm } from 'react-hook-form';

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log('errors', errors);
  return (
    <div className="container w-full bg-slate-200 sm:bg-white">
      <div className=" min-w-full gap-2 break-all sm:bg-white flex flex-col  sm:flex-row sm:px-4">
        <div className="contact-info bg-white rounded my-2 p-2 w-full sm:w-1/2">
          <div className="contact-info-title font-bold text-3xl mb-4">Liên hệ </div>
          <div className="contact-info-desc">
            Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn PhongTro123.Com
          </div>
          <div className="contact-info-PN flex gap-2">
            <div className="font-bold">Điện thoại:</div>
            <p> 0824144695</p>
          </div>
          <div className="contact-info-email flex gap-2">
            <div className="font-bold">
              Email: <samp />
            </div>
            <p>nghiaphamtq17@gmail.com</p>
          </div>
          <div className="contact-info-zalo flex gap-2">
            <div className="font-bold">Email:</div>
            <p>nghiaphamtq17@gmail.com</p>
          </div>

          <div className="contact-info-address flex gap-2">
            <div className="font-bold">Đại chỉ</div>
            <p>nghiaphamtq17@gmail.com</p>
          </div>
        </div>

        {/* <div className="w-screen h-2 bg-gray-300"></div> */}

        <div className="direct-contact  flex flex-col mt-5 pt-4 bg-white rounded my-2 p-2 w-full sm:w-1/2 sm:px-4">
          <div className="direct-contact-title font-bold text-3xl mb-4">Liên hệ trực tiếp </div>

          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="name w-full pb-4">
              <div className="name-title">Họ và tên của bạn</div>
              <input
                className="w-full px-2 h-10  border-solid text-sm border border-black focus:ring-0 focus:outline-0 focus:border-blue-400 rounded"
                type="text"
                placeholder="Name"
                {...register('name', { required: true, maxLength: 100 })}
              />
              <div className="text-red-600">{errors.name && 'First name is required'}</div>
            </div>

            <div className="phoneNumber w-full pb-4">
              <div className="phoneNumber-title">Họ và tên của bạn</div>
              <input
                className="w-full px-2 h-10  border-solid text-sm border border-black focus:ring-0 focus:outline-0 focus:border-blue-400 rounded"
                type="tel"
                placeholder="Phone number"
                {...register('phone_number', { required: true, pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i })}
              />
              <div className="text-red-600">{errors.phone_number && 'First name is required'}</div>
            </div>

            <div className="desc w-full pb-4">
              <div className="phoneNumber-title">Nội dung</div>
              <textarea
                rows={5}
                cols={30}
                className="w-full px-2 border-solid text-sm border border-black focus:ring-0 focus:outline-0 focus:border-blue-400 rounded"
                {...register('description', { required: true, min: 20, maxLength: 1000 })}
              />
              <div className="text-red-600">{errors.description && 'First name is required'}</div>
            </div>

            <button className="w-full border-solid rounded bg-red-400 text-white py-2 text-xl" type="submit">
              Gửi
            </button>
          </form>
        </div>
      </div>
      <div className="WhyChose w-full py-2">
        <WhyChose />
      </div>
    </div>
  );
}
