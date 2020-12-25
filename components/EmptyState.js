import React from 'react';
import { Heading, Text, Button, Flex } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    width="100%"
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={4}>
      You don't have any sites... yet.
    </Heading>
    <Text mb={4}>Welcome! 👋🏻 Let's get started.</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
