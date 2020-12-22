import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyle';

const designSystem = extendTheme({ customTheme });

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={designSystem}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
