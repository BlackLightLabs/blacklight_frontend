import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    VStack,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";
import { Fade } from 'react-reveal';
import {useBreakpointValue} from '@chakra-ui/media-query';
import "./css/FrostedGlass.css";

export default function About({color}) {
    const isMobile = useBreakpointValue({base: true, md: false});
    const bg = useColorModeValue("gray.50", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    return (
        <>
            <Container maxW={isMobile ? "3xl" : "4xl"} id="about" mt={20}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{base: 8, md: 14}}
                    pb={{base: 20, md: 36}}
                >
                    <Stack align="center" direction="row" px={4}>
                        <HStack mx={4}>
                            <Text color={`${color}.400`} fontWeight={900}>
                                01
                            </Text>
                            <Text fontWeight={800}>About</Text>
                        </HStack>
                        <Divider orientation="horizontal"/>
                    </Stack>
                    <Stack px={4} spacing={4} align={"center"}>
                        <Fade bottom>
                            <VStack
                                className={"frosted-glass"}
                                align={"center"}
                                bg={bg}
                                rounded={"lg"}
                                p={{base: 4, md: 8}}
                                borderWidth={1}
                                borderColor={borderColor}
                                w={"full"}
                                maxW={"xl"}
                                textAlign={"left"}
                                spacing={6}
                            >
                                <Heading size="lg" color={`${color}.400`} fontWeight={700}>
                                    Democratizing AI
                                </Heading>
                                <Text fontSize={"md"}>
                                    Data science is hard, but Blacklight makes it easy. Our groundbreaking project, born
                                    from a Master's thesis in Data Science, is on a mission to democratize AI and make
                                    it
                                    accessible to all.
                                </Text>
                                <Text fontSize={"md"}>
                                    Blacklight revolutionizes AutoML by leveraging the power of genetic algorithms to
                                    optimize deep neural network topologies. Our vision goes beyond optimization; we aim
                                    to
                                    create a type-5 autoML framework that interviews data scientists, understands their
                                    needs, and crafts a custom machine learning algorithm deployed through a
                                    user-friendly
                                    API.
                                </Text>
                                <Text fontSize={"md"}>
                                    Get ready to experience the future of AI, where complexity fades away and innovation
                                    thrives.
                                </Text>
                            </VStack>
                        </Fade>
                        <Fade bottom>
                            <VStack
                                className={"frosted-glass"}
                                bg={bg}
                                rounded={"lg"}
                                p={{base: 4, md: 8}}
                                borderWidth={1}
                                borderColor={borderColor}
                                w={"full"}
                                maxW={"xl"}
                                textAlign={"left"}
                                spacing={6}
                                mt={6}
                            >
                                <Heading size="lg" color={`${color}.400`} fontWeight={700}>
                                    Who We Are
                                </Heading>
                                <Text fontSize={"md"}>
                                    We're a group of passionate data scientists from UC Berkeley, dedicated to
                                    simplifying
                                    the complex world of AI. Our shared concern for the intricacies of AI has brought us
                                    together to develop Blacklight, the key to unlocking AI's potential for everyone.
                                </Text>
                            </VStack>
                        </Fade>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}