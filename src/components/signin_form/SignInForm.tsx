import { PROVIDERS_LIVE_SITE, PROVIDERS_LOCAL } from '@/util/constant';
import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react';

function SignInForm(seccsion: any) {
  const PROVIDERS =
    window.location.hostname === 'localhost' ? PROVIDERS_LOCAL : PROVIDERS_LIVE_SITE(window.location.hostname);

  console.log('window.location.hostname', window.location.hostname);

  return (
    <div className="flex gap-2">
      {Object?.values(PROVIDERS).map((provider: any) => {
        return (
          <div className="w-1/2" key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        );
      })}
    </div>
  );
}

export default SignInForm;

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
      seccsion: await session,
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}
