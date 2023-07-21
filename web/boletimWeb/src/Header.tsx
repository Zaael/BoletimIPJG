import { Flex, Heading, Image, useColorMode, Text, Box, Avatar, Spacer, IconButton, Button, HStack, VStack, Tag, TagLabel, Badge, } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Login, LogOut } from "./Login";
import { Perfil, sessaoLogada } from "./SupaBaseConnectionAPI";

export function Cabecalho() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Flex justifyItems={"auto"} width={["container.sm", "container.md", "container.lg"]} marginLeft={"auto"} marginRight={"auto"}>
            <LogoIgreja></LogoIgreja>
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
            src={colorMode === "dark" ? "./LogoBoletimIPJGBranco.png" : "./LogoBoletimIPJGAzul.png"}
            alt="Logo IPJG"
            w={["16", "24", "36"]}
            maxW={{ base: "100%", sm: "48" }}
        ></Image>
    );
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
                <Link to={'/login'}>
                    <Text>Login</Text>
                </Link>
            }            
        </>
    )
}