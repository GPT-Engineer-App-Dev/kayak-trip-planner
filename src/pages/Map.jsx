import { Container, VStack, Heading, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const L = window.L;

    if (!L) {
      console.error("Leaflet library is not loaded.");
      return;
    }

    const map = L.map(mapRef.current).setView([59.3706, 18.6984], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Kayaking Routes Map</Heading>
        <Box ref={mapRef} width="100%" height="400px" />
      </VStack>
    </Container>
  );
};

export default Map;