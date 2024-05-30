import { ThemeProvider } from "@/shared/context/ThemeProvider";
import "@/styles/globals.css";
import Header from "@/widgets/Header";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Head>
          <link rel="icon" href="/githubIcon.png/" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
