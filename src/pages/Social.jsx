import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Social = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Social Features</Heading>
        <Text fontSize="lg">Share your kayaking experiences and connect with other kayakers.</Text>
      </VStack>
    </Container>
  );
};

export default Social;