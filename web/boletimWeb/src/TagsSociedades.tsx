import { Button, HStack, } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";
import { SociedadeInternaContext } from "./contexts/SociedadesInternasContext";



export default function TagsSociedades() {
    const { tags } = useContext(SociedadeInternaContext);

    return (
        <div>
            <HStack spacing={4}>
                {
                    tags.map((sigla) => (
                        <TagSocidedadeInterna sigla={sigla?.sigla} cor={sigla.cor} key={sigla?.sigla}></TagSocidedadeInterna>
                    ))
                }
            </HStack>
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

    return <Button onClick={(e) => toggleVariantTag(e.currentTarget.value)}
        key={props.sigla}
        size={'sm'}
        variant={select ? 'solid' : 'outline'}
        borderRadius={'full'}
        colorScheme={props.cor ? props.cor : undefined}
        value={props.sigla}>
        {props.sigla}
    </Button>
}

