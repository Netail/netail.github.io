import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Maikel</title>
        <meta name='description' content='Portfolio of Maikel' />
        <meta
          name='google-site-verification'
          content='x0xvdH595p-ha7xSvIZ0rYH8Eti50S5c2lAlHSdFE90'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
