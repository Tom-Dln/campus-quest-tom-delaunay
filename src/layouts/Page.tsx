import Head from 'next/head';
import { Footer, Header } from '@components/index';

/**
 * It's a React component that renders a page with a header, footer, and bottom navigation
 * @param  - title - The title of the page.
 * @returns A React component that renders a header, footer, and main content.
 */

type PageProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Page({ title, className, children }: PageProps) {
  const pageTitle = title === 'Home' ? 'Campus Quest' : `Campus Quest | ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main>
        <article className={className}>{children}</article>
      </main>
      <Footer />
    </>
  );
}

export default Page;
