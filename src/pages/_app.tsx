import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import UserProvider from '@/context/UserContext';
import Layout from '@/components/Layouts';
import { config } from '@fortawesome/fontawesome-svg-core';
import LayoutAdmin from '@/components/LayoutAdmin';
import { SessionProvider } from 'next-auth/react';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  const router = useRouter();

  return (
    <UserProvider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        {router.pathname.search('/quan-ly') > -1 ? (
          <>
            <LayoutAdmin>
              <Component {...pageProps} />
            </LayoutAdmin>
          </>
        ) : (
          <Layout>
            {loading ? (
              <ReactLoading type={'spinningBubbles'} color="red" width={300} height={300} />
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        )}
      </SessionProvider>
    </UserProvider>
  );
}

export default MyApp;
