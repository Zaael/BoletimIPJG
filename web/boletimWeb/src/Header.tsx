import { Flex, Heading, Image, useColorMode, Text, Box, Avatar, Spacer, IconButton, Button, HStack, VStack, Tag, TagLabel, Badge, } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Login, LogOut } from "./Login";
import { getAvatar, InserirPerfil, Perfil, sessaoLogada, signInWithGoogle } from "./SupaBaseConnectionAPI";

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
    var avatar = Perfil;   
    return (
        <>
            {
                sessaoLogada.session != null &&
                <>
                    <Tag size='lg' colorScheme="green" borderRadius='full' variant='subtle'>
                        <Avatar
                            name="avatarProfile"
                            me="16px"
                            size="xs"
                            ml={-1}
                            mr={2}
                            src={avatar != null ? avatar[0]?.avatar?.toString() : ""}
                        />
                        <TagLabel>{avatar != null ? avatar[0]?.nome?.split(' ')[0].toString() : ""} </TagLabel>
                    </Tag>
                    <LogOut></LogOut>
                </>
            }
            {sessaoLogada.session == null &&
                // <Button onClick={signInWithGoogle} m={'2'} >
                //     Login
                // </Button>
                <Link to={'/login'}>
                    <Text>Login</Text>
                </Link>
            }
            {/* <Login></Login> */}
        </>
    )
}