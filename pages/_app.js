import '../styles/globals.css'
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/jpg"
          sizes="16x16"
          href="/logo.jpg"
        />
      </Head>
      {loading ? <Loader /> :
        <Component {...pageProps} />}
    </>
  )
}

export default MyApp
