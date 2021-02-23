import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { Chakra, getServerSideProps } from "theme";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <CSSReset />
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps };

export default MyApp;
