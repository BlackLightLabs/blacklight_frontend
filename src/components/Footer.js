import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    useColorMode,
    Button,
} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function Footer() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                align="center"
            >
                <Text>© 2023 Cole Agard. All rights reserved</Text>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                </Button>
            </Container>
        </Box>
    );
}
