import { ThemeProvider } from "@aws-amplify/ui-react";
import studioTheme from "@/ui-components/studioTheme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HomeLayout from "@/components/main/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </ThemeProvider>
  );
}
