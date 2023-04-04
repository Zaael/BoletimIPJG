import { HStack, Tag, TagLabel } from "@chakra-ui/react";

export function TagsSociedades(props: {
    Lista: [{ sigla: string, cor: string }]
}) {
    const tags = props.Lista.map(item => {
        <Tag
            size={'sm'}
            key={item.sigla}
            variant='outline'
            colorScheme={item.cor}
            borderRadius='full'>
            <TagLabel>{item.sigla}</TagLabel>
        </Tag>

    })
    return (
        <HStack>
            {tags}
        </HStack>
    );
}