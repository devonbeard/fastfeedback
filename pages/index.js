import { Button, Flex } from '@chakra-ui/react';
import { FastFeedbackIcon } from '../icons';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      p={8}
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <FastFeedbackIcon color="black" boxSize="32px" mb={4} />

      {auth.user ? (
        <Button
          as="a"
          href="/sites"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <Button size="md" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
