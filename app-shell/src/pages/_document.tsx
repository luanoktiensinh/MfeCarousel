import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import React from "react";
import { revalidate, flushChunks } from '@module-federation/nextjs-mf/utils';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    /*Enables hot reloading of node server (not client) in production. This is recommended, 
    without it - servers will not be able to pull remote updates without a full restart. */
    if (process.env.NODE_ENV === 'development' && !ctx.req?.url?.includes('_next')) {
      await revalidate().then(shouldReload => {
        if (shouldReload) {
          ctx.res?.writeHead(302, { Location: ctx.req?.url });
          ctx.res?.end();
        }
      });
    } else {
      ctx?.res?.on('finish', () => {
        console.log('revalidating');
        revalidate();
      });
    }
    const chunks = await flushChunks();
    // TODO: remove console log later after tested done
    console.log('chunks', chunks);

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      chunks,
    };
  }
 render() {

    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>

        <body className="bg-background-grey">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
