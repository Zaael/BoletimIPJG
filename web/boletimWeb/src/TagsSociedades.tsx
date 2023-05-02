import { Button, HStack, } from "@chakra-ui/react";
import { useState } from "react";

const Lista = [
    { sigla: 'Cultos', cor: 'blue' },
    { sigla: 'SAF', cor: 'pink' },
    { sigla: 'UMP', cor: 'purple' },
    { sigla: 'UPA', cor: 'green' },
    { sigla: 'UCP', cor: 'orange' },
    { sigla: 'Estudos', cor: 'teal' },   
];


export default function TagsSociedades(props:{setFiltroTag:Function}) {
    return (
        <HStack spacing={4}>
            {Lista.map((sigla) => (
                <TagSocidedadeInterna sigla={sigla.sigla} cor={sigla.cor} setFiltroTag={props.setFiltroTag} key={sigla.sigla}></TagSocidedadeInterna>
            ))}
        </HStack>
    );
}

function TagSocidedadeInterna(props: { sigla: string, cor: string, setFiltroTag: Function }) {
    const [select, setSelect] = useState(false);
    
    function toggleVariantTag(e:any){
        var selecionado = !select;
        setSelect(selecionado);
        selecionado? props.setFiltroTag(e) : props.setFiltroTag('');
    }

    return <Button onClick={(e) => toggleVariantTag(e.currentTarget.value)}
        key={props.sigla}
        size={'sm'}
        variant= {select? 'solid' : 'outline'}
        borderRadius={'full'}
        colorScheme={props.cor}
        value={props.sigla}>
        {props.sigla}
    </Button>
}