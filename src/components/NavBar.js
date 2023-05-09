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
    IconButton,
    useMediaQuery,
    useDisclosure,
    Link,
} from "@chakra-ui/react";
import { HamburgerIcon} from "@chakra-ui/icons";
import {useState} from "react";


export default function Nav({color}) {
    const [scroll, setScroll] = useState(false);
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

    const scrollToEthics = () => {
        const ethicsSection = document.querySelector("#ethics");
        ethicsSection.scrollIntoView({behavior: "smooth"});
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
                                <Button variant="ghost" onClick={scrollToEthics}>
                                    Ethics
                                </Button>
                            </>
                        ) : (
                            <></>
                        )}


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
                                            <Button variant="ghost" onClick={scrollToEthics}>
                                                Ethics
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
