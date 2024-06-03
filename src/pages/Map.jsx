import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";
import { useEffect } from "react";

const initializeMap = () => {
  const L = window.L;
  const map = L.map('map').setView([59.3706, 18.6984], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
};

const Map = () => {
  useEffect(() => {
    initializeMap();
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Kayaking Routes Map</Heading>
        <Text fontSize="lg">Explore various kayaking routes starting from Sollenkroka.</Text>
        <Box id="map" width="100%" height="500px" />
      </VStack>
    </Container>
  );
};

export default Map;