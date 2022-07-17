import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pretest Jakmall Front-End Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
