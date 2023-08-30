import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HomeLayout from "@/components/main/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
