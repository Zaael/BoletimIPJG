import { Heading, Image, useColorMode } from "@chakra-ui/react";
import { Tags } from "./SupaBaseConnectionAPI";



export function LogoSociedadeInterna(props: { sigla: string }) {
    return (
        <Image
            fit={"contain"}
            borderColor={props.sigla.toLocaleLowerCase() + ".100"}
            boxSize={"80px"}
            m={'2'}
            src={Tags?.find(tag => tag.sigla == props.sigla)?.logo?.toString()}
            alt='Logo Sociedade Interna'
            w={["12", "16"]} ></Image>
    )
}