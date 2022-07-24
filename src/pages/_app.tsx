import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import "../../styles/header.css";
import "../../styles/hero.css";
import "../../styles/product.css";
import "../../styles/service.css";
import "../../styles/about.css";
import "../../styles/footer.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
