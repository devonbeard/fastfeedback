import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from '@/styles/theme';

const designSystem = extendTheme({ customTheme });

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={designSystem}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
