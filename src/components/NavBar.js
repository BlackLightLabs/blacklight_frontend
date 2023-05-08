import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    Text,
    DrawerContent,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    useMediaQuery,
    useDisclosure,
    Link,
} from "@chakra-ui/react";
import {MoonIcon, SunIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useState} from "react";


export default function Nav({color}) {
    const colors = {
        "blue": "#3182CE",
        "cyan": "#00B5D8",
        "gray": "#718096",
        "green": "#38A169",
        "orange": "#DD6B20",
        "pink": "#D53F8C",
        "purple": "#805AD5",
        "red": "#E53E3E",
        "teal": "#319795",
        "yellow": "#D69E2E"
    };
    const [scroll, setScroll] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const scrollToHero = () => {
        const heroSection = document.querySelector("#hero");
        heroSection.scrollIntoView({behavior: "smooth"});
    };

    const scrollToAbout = () => {
        const aboutSection = document.querySelector("#about");
        aboutSection.scrollIntoView({behavior: "smooth"});
    };
    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    return (
        <>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                h={16}
                boxShadow={scroll ? "base" : "none"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
            >
                <Link onClick={scrollToHero}>
                    <Text>BLACKLIGHT LABS</Text>
                </Link>

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={4}>
                        {isLargerThanMD ? (
                            <>
                                <Button variant="ghost" onClick={scrollToAbout}>
                                    About
                                </Button>
                            </>
                        ) : (
                            <></>
                        )}
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                        </Button>

                        {isLargerThanMD ? (
                            <></>
                        ) : (
                            <>
                                <Button
                                    as={IconButton}
                                    icon={<HamburgerIcon/>}
                                    onClick={onOpen}
                                ></Button>
                                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                                    <DrawerOverlay/>
                                    <DrawerContent>
                                        <DrawerBody>
                                            <Button variant="ghost" onClick={scrollToAbout}>
                                                About
                                            </Button>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </>
                        )}
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}