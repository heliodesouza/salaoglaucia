// No arquivo _document.js (Next.js)
import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap"
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
