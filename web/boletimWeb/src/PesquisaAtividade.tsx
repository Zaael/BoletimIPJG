import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export function PesquisaAtividade() {
    return (
        <InputGroup w={'50%'} >
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Pesquisar'/>
        </InputGroup>
    )
}