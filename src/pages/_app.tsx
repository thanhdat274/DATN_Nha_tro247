import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Router } from 'next/router';
import ReactLoading from 'react-loading';
import UserProvider from '@/context/UserContext';
import Layout from '@/components/Layouts';
import { SessionProvider } from 'next-auth/react';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <UserProvider>
        <Layout>
          {loading ? (
            <ReactLoading type={'spinningBubbles'} color="red" width={300} height={300} />
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </UserProvider>
    </SessionProvider>
  );
}

export default MyApp;
