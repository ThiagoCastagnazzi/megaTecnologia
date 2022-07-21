import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import "../../styles/header.css";
import "../../styles/product.css";
import "../../styles/service.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
