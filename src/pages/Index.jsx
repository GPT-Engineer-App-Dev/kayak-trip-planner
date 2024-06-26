import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to the Kayaking Trip Planner</Heading>
        <Text fontSize="lg">Plan your kayaking trips starting from Sollenkroka. Explore routes, share your experiences, and connect with fellow kayakers.</Text>
      </VStack>
    </Container>
  );
};

export default Index;