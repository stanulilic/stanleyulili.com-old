import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"></link>
          <link rel="manifest" href="/favicons/site.webmanifest"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
