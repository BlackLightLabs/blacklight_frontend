import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { React } from 'react';

export default function Header({ color }) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Heading>
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap'
          rel='stylesheet'
        />
      </Heading>

      <Container maxW={isMobile ? '3xl' : '4xl'} minH={"100vh"} py={20} id='hero'>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            ETHICAL MACHINE LEARNING <br />
            <Text as={'span'} color={`${color}.400`}>
                FOR ALL
            </Text>
          </Heading>
          <Text
            color={'gray.500'}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
          >

          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
          </Stack>
        </Stack>
      </Container>
    </>
  );
}