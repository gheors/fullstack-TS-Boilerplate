import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";
import '../styles/gradient.css'


export const appTheme = extendTheme({
  fonts: {
    heading: "arial",
    body: "arial",
  },
  colors: {
    text: {
      darkText: "rgba(0,0,0,1)",
      lightText: "rgba(255,255,255,1)"
    },
    background: {
      bgLight: "#FBFAFF",
      bgDark: "#191D22",
    },
    inputs: {
      inputLight: "rgba(255, 255, 255, 0.54)",
      inputDark: "rgba(0,0,0,0.7)",
    },
    loader: {
      light: "lightgreen",
      dark: "lightgreen"
    },
  },
  styles: {
    global: {
      body: {
        fontSize: "20px",
        color: "#303030",
      },
    },
    shadows: {
      black: `0 0 5px 0 rgba(0,0,0,0.7)`
    }
  },

});

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
  }, [])

  return (
    <>
      <ChakraProvider theme={appTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
