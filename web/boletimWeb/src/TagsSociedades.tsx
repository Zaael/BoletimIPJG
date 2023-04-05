import { HStack, List, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

const Lista = [
    { sigla: 'UMP', cor: 'purple' },
    { sigla: 'UPA', cor: 'green' },
    { sigla: 'SAF', cor: 'pink' },
    { sigla: 'Cultos', cor: 'blue' },
    { sigla: 'UPH', cor: 'orange' }
];
export default function TagsSociedades() {
    return(
        <HStack spacing={4}>
            {Lista.map((sigla) => (
                <Tag                    
                    key={sigla.sigla}                    
                    variant='outline'
                    colorScheme={sigla.cor}>
                    <TagLabel>{sigla.sigla}</TagLabel>
                    <TagCloseButton />
                </Tag>
            ))}
        </HStack>
    );
}