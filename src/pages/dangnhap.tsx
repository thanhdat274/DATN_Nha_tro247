import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react';
// import styles from '../styles/Signin.module.css';

function signin({ providers, csrfToken }: any) {
  // console.log('providers', providers);

  // console.log('csrfToken', csrfToken);

  return (
    <div>
      {Object.values(providers).map((provider: any) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        );
      })}
    </div>
  );
}

export default signin;

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/' },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}
