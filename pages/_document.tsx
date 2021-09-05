
import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import flush from "styled-jsx/server";

interface IProps {
  css: any;
}

class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { html, head } = ctx.renderPage();
    const styles = flush();
  
    return { ...initialProps, html, head, styles };
  }

  render() {
    const { ids }: any = this.props;

    return (
      <html lang="en">
        <Head>
          
          <link rel="stylesheet" href="//demo.productionready.io/main.css" />
          <link
            rel="stylesheet"
            href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
