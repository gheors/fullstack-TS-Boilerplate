import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";


export const theme = extendTheme({
  fonts: {
    heading: "Fraktion Sans",
    body: "Arial",
  },
  colors: {
    lightRed: "#FB7167",
    black08: "rgba(0,0,0,0.8)",
    bgDark: "#202020",
    bgLight: "white",
    textLight: "white",
    textDark: "rgba(0,0,0,0.5)",
    inputLight: "rgba(255, 255, 255, 0.54)",
    inputDark: "rgba(0,0,0,0.7)",
  },
  styles: {
    global: {
      body: {
        fontSize: "16px",
        color: "#303030",
      },
    },
  },
});



export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
  }, [])

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
