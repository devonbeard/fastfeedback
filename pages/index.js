import Head from 'next/head';
import { Button, Heading, Text, Code, Box } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <main>
        <Box p={8}>
          <Heading as="h1" size="xl" mb={4}>
            Fast Feedback
          </Heading>
          <Text mb={4}>
            Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
          </Text>
          {auth.user ? (
            <Button size="md" onClick={(e) => auth.signout()}>
              Sign Out
            </Button>
          ) : (
            <Button
              colorScheme="teal"
              size="md"
              onClick={(e) => auth.signinWithGitHub()}
            >
              Sign In
            </Button>
          )}
        </Box>
      </main>
    </div>
  );
};

export default Home;
