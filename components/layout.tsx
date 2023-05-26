import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Navigation from "./navigation";

export default function Layout(props) {
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Stanley Ulili – Developer and writer.",
    description: `Software developer writing articles for my past self`,
    image: "",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.stanleyulili.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.stanleyulili.com${router.asPath}`}
          key="canonical"
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Stanley Ulili" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />
        // Twitter
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stanulilic" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
