import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "./componants/Footer/Footer";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}