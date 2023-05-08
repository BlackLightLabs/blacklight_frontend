import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/media-query';

export default function About({ color }) {
  const isMobile = useBreakpointValue({ base: true, md: false });
    return (
      <>
        <Container maxW={isMobile ? "3xl" : "4xl"} id="about" mt={20}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={900}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text color={"gray.500"} fontSize={"xl"} px={4}>
              Data Science is hard. We make it easy.
            </Text>
          </Stack>
        </Container>
      </>
    );
}