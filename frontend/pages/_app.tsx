import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStateProvider } from "@/context/GlobalStateProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <GlobalStateProvider>
        <main className="light text-foreground bg-background">
          <Component {...pageProps} />
        </main>
      </GlobalStateProvider>
    </NextUIProvider>
  );
}
