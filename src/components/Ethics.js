import React from 'react';
import {
    Box,
    VStack,
    HStack,
    Text,
    Container,
    Heading,
    Stack,
    Grid,
    useColorModeValue,
    Divider,
    Flex,
} from "@chakra-ui/react";
import {ChevronRightIcon} from '@chakra-ui/icons';
import {Fade} from 'react-reveal';
import {useBreakpointValue} from '@chakra-ui/media-query';
import "./css/FrostedGlass.css";

export default function Ethics({color}) {
    const isMobile = useBreakpointValue({base: true, md: false});
    const bg = useColorModeValue("gray.50", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    const challenges = [
        "Bias: Ensuring fairness in AI algorithms.",
        "Transparency: Making AI models and processes understandable and verifiable.",
        "Accountability: Taking responsibility for AI's actions and outcomes."
    ];

    const solutions = [
        "Diverse training data: Selecting unbiased datasets and validating models to eliminate potential discrimination.",
        "Open and understandable AI: Committing to transparent models and processes that foster trust.",
        "Corrective mechanisms: Establishing systems to address unintended consequences and continuously improve our AI."
    ];

    return (
        <>
            <Container maxW={isMobile ? "3xl" : "4xl"} id="ethics" mt={20}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{base: 8, md: 14}}
                    pb={{base: 20, md: 36}}
                >
                    <Stack align="center" direction="row" px={4}>
                        <HStack mx={4}>
                            <Text color={`${color}.400`} fontWeight={900}>
                                02
                            </Text>
                            <Text fontWeight={800}>Ethics</Text>
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
                                    Ethical AI
                                </Heading>
                                <Text fontSize={"md"}>
                                    Automated Machine Learning (AutoML) brings powerful solutions but also raises
                                    ethical concerns. At the forefront, we must address issues such as bias,
                                    transparency, and accountability.
                                </Text>
                                {isMobile ? (
                                    <VStack spacing={6} align="stretch">
                                        <Box>
                                            <Fade bottom>
                                                <Heading size="md" color={`${color}.400`} fontWeight={700}>
                                                    Challenges
                                                </Heading>
                                            </Fade>
                                            {challenges.map((challenge, index) => (
                                                <Box key={`challenge-${index}`} minHeight="2rem">
                                                    <Fade bottom>
                                                        <Flex wrap="nowrap">
                                                            <Text as={ChevronRightIcon} boxSize={6}
                                                                  color={`${color}.500`}/>
                                                            <Text ml={2} display="block">
                                                                {challenge}
                                                            </Text>
                                                        </Flex>
                                                    </Fade>
                                                </Box>
                                            ))}
                                        </Box>
                                        <Box>
                                            <Fade bottom>
                                                <Heading size="md" color={`${color}.400`} fontWeight={700}>
                                                    Our Solutions
                                                </Heading>
                                            </Fade>
                                            {solutions.map((solution, index) => (
                                                <Box key={`solution-${index}`} minHeight="2rem">
                                                    <Fade bottom>
                                                        <Flex wrap="nowrap">
                                                            <Text as={ChevronRightIcon} boxSize={6}
                                                                  color={`${color}.500`}/>
                                                            <Text ml={2} display="block">
                                                                {solution}
                                                            </Text>
                                                        </Flex>
                                                    </Fade>
                                                </Box>
                                            ))}
                                        </Box>
                                    </VStack>
                                ) : (
                                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                        <Box>
                                            <Fade bottom>
                                                <Heading size="md" color={`${color}.400`} fontWeight={700}>
                                                    Challenges
                                                </Heading>
                                            </Fade>
                                        </Box>
                                        <Box>
                                            <Fade bottom>
                                                <Heading size="md" color={`${color}.400`} fontWeight={700}>
                                                    Our Solutions
                                                </Heading>
                                            </Fade>
                                        </Box>
                                        {challenges.map((challenge, index) => (
                                            <>
                                                <Box key={`challenge-${index}`} minHeight="2rem">
                                                    <Fade bottom>
                                                        <Flex wrap="nowrap">
                                                            <Text as={ChevronRightIcon} boxSize={6}
                                                                  color={`${color}.500`}/>
                                                            <Text ml={2} display="block">
                                                                {challenge}
                                                            </Text>
                                                        </Flex>
                                                    </Fade>
                                                </Box>
                                                <Box key={`solution-${index}`} minHeight="2rem">
                                                    <Fade bottom>
                                                        <Flex wrap="nowrap">
                                                            <Text as={ChevronRightIcon} boxSize={6}
                                                                  color={`${color}.500`}/>
                                                            <Text ml={2} display="block">
                                                                {solutions[index]}
                                                            </Text>
                                                        </Flex>
                                                    </Fade>
                                                </Box>
                                            </>
                                        ))}
                                    </Grid>
                                )}

                            </VStack>
                        </Fade>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
