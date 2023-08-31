import theme from "@/components/theme";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HomeLayout from "@/components/main/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </ThemeProvider>
  );
}
