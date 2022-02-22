import "../styles/globals.css";

import { useState } from "react";
import type { AppProps } from "next/app";

// Mantine
import { MantineProvider } from "@mantine/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Poppins, sans-serif",
        headings: { fontFamily: "Poppins, sans-serif" },
        colorScheme: "dark",
        primaryColor: "blue",
      }}
      withGlobalStyles
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
