import { ThemeProvider } from "@/shared/context/ThemeProvider";
import "@/styles/globals.css";
import Header from "@/widgets/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
