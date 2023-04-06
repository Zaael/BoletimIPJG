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
export default function TagsSociedades() {
    return (
        <HStack spacing={4}>
            {Lista.map((sigla) => (
                <TagSocidedadeInterna sigla={sigla.sigla} cor={sigla.cor}></TagSocidedadeInterna>
            ))}
        </HStack>
    );
}

function TagSocidedadeInterna(props: { sigla: string, cor: string }) {
    const [select, setSelect] = useState(false);
    
    function toggleVariantTag(){
        setSelect(!select);
    }

    return <Button onClick={toggleVariantTag}
        key={props.sigla}
        size={'sm'}
        variant= {select? 'solid' : 'outline'}        
        borderRadius={'full'}
        colorScheme={props.cor}>
        {props.sigla}
    </Button>
}