import { WrapItem, Text } from "@chakra-ui/react";

export function CardAtividadeItem(props:{Item: string, Tipo: string}) {
    return(        
        <WrapItem>
            <Text fontSize='smaller'>{props.Tipo}: {props.Item}</Text>
        </WrapItem>
    )
}