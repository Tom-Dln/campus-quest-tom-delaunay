import { Html, Head, Main, NextScript } from 'next/document';
import { Meta } from '@components/index';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
