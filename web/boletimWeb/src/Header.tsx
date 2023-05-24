import { Flex, Heading, Image, useColorMode, Text, Box, Avatar, Spacer, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export function Cabecalho() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Flex alignItems={'center'}>
            <LogoIgreja></LogoIgreja>
            <HeadingIgreja></HeadingIgreja>
            <Spacer></Spacer>
            <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="xs"
                me={'16px'}
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />
            <AreaLogin></AreaLogin>
        </Flex>
    )
}

export function LogoIgreja() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Image objectFit="contain"
            src={colorMode === "dark" ? "./IPJG Minimalista Branco.png" : "./IPJG Minimalista.png"}
            alt="Logo IPJG"
            maxW={{ base: "20%", sm: "12" }}
        ></Image>);
}

export function HeadingIgreja() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <div>
            <Box maxW='sm' alignItems='center' overflow='hidden' paddingLeft={2} paddingTop={3} >
                <Text color={colorMode === "dark" ? "white" : "#2c3c6c"} fontFamily={"logo"} letterSpacing={"0.05em"} fontSize={"1.5em"} marginBottom={"-6"}  >
                    Boletim
                </Text>
                <Text color={colorMode === "dark" ? "white" : "#2c3c6c"} fontFamily={"logo"} letterSpacing={"0.1em"} fontSize={"3em"} marginTop={"-5"}>
                    IPJG
                </Text>
            </Box>
        </div>
    )
}

export function AreaLogin() {
    return (
        <>
            <Avatar
                me="16px"
                size="xs">

            </Avatar>
            <Text> Sign in</Text>
        </>
    )
}