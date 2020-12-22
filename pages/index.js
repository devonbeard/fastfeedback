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
        <Button size="md" onClick={(e) => auth.signout()}>
          Sign Out
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
