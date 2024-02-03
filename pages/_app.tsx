import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Maikel</title>
                <meta
                    name='description'
                    content='Portfolio of Maikel'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
