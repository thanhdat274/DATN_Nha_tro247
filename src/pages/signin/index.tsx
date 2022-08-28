import { getProviders, signIn, getCsrfToken, useSession } from 'next-auth/react';
// import styles from '../../styles/Auth.module.scss';
import { InferGetServerSidePropsType } from 'next';
// import { FaGithub, FaTwitter, FaGoogle } from 'react-icons/fa';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CtxOrReq } from 'next-auth/client/_utils';
import { useForm } from 'react-hook-form';

interface IProvider {
  id: string;
  name: string;
}

const SignIn = ({ providers, csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (session) {
  //     router.push('/');
  //   }
  // }, [session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log('data', data);
  console.log(errors);
  return (
    <div className="container">
      <section>
        <h1>SignIn to Continue</h1>

        <div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-full border border-black focus:border-black"
                type="email"
                placeholder="Email"
                {...register('Email', { required: true, max: 3, pattern: /^\S+@\S+$/i })}
              />
              <input
                className="w-full border border-black focus:border-black"
                type="password"
                placeholder="password"
                {...register('password', { required: true, max: 100, min: 8 })}
              />

              <input type="submit" />
            </form>
          </div>

          <h2>OR</h2>

          <div>
            {providers
              ? Object.values(providers).map((provider: IProvider, i: number) => {
                  if (provider.id === 'google') {
                    return (
                      <div key={provider.name}>
                        <div>
                          <div className="cursor-pointer" onClick={() => signIn(provider.id)}>
                            Google
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              : ''}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { providers, csrfToken },
  };
};

export default SignIn;
