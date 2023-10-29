import Head from "next/head";
import React from "react";

const MyHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
    </Head>
  );
};

export default MyHead;
