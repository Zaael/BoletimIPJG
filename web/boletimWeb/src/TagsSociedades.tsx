import { Button, Flex, HStack, Stack, } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";
import { SociedadeInternaContext } from "./contexts/SociedadesInternasContext";



export default function TagsSociedades() {
    const { tags } = useContext(SociedadeInternaContext);

    return (
        <div>
            <Flex direction={"row"} m={3} gap={2} wrap="wrap" justifyContent={"center"}>
                {
                    tags.map((sigla) => (
                        <TagSocidedadeInterna sigla={sigla?.sigla} cor={sigla.cor} key={sigla?.sigla}></TagSocidedadeInterna>
                    ))
                }
            </Flex>
        </div>
    );
}

function TagSocidedadeInterna(props: { sigla: string, cor: string | null }) {
    const [select, setSelect] = useState(false);
    const { dispatchTags, filtrarAtividades } = useContext(AtividadeContext);

    useEffect(() => {
        filtrarAtividades();
    }, [select]);

    function toggleVariantTag(sigla: string) {
        var selecionado = !select;
        setSelect(selecionado);
        selecionado ?
            dispatchTags({
                type: "ativo",
                ativo: selecionado,
                sigla: sigla
            }) :
            dispatchTags({
                type: "inativo",
                ativo: !selecionado,
                sigla: sigla
            })

    }

    return <Button w={['10,20,30']} onClick={(e) => toggleVariantTag(e.currentTarget.value)}
        key={props.sigla}
        size={'sm'}
        variant={select ? 'solid' : 'outline'}
        borderRadius={'full'}
        colorScheme={props.sigla.toLocaleLowerCase() ? props.sigla.toLocaleLowerCase() : undefined}
        value={props.sigla}>
        {props.sigla}
    </Button>
}

