import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Maikel</title>
                <meta name="description" content="Portfolio of Maikel" />
                <meta
                    name="google-site-verification"
                    content="7Q58teNN2nj8sR8DJ0Salrl1AmWDgcsn_d6itZihHz4"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
