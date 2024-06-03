import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Map = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Kayaking Routes Map</Heading>
        <Text fontSize="lg">Explore various kayaking routes starting from Sollenkroka.</Text>
      </VStack>
    </Container>
  );
};

export default Map;