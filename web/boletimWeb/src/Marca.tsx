import { Heading, Image, useColorMode } from "@chakra-ui/react";
import { Tags } from "./SupaBaseConnectionAPI";

export function LogoIgreja() {
    return (
        <Image objectFit="cover"
            src="./ipjg.png"
            alt="Logo IPJG"
            maxW={{ base: "100%", sm: "16" }}
        ></Image>);
}

export function HeadingIgreja() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Heading color={colorMode === "dark" ? "white" : "#243A6D"} as="h2" size="sm">
            Boletim IPJG
        </Heading>
    )
}

export function LogoSociedadeInterna(props: { sigla: string }) {
    return (
        <Image objectFit='contain'
            src={Tags?.find(tag => tag.sigla == props.sigla)?.logo?.toString()}
            alt='Logo Sociedade Interna'
            maxW={{ base: '100%', sm: '24' }} ></Image>
    )
}