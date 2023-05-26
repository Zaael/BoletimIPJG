import { WrapItem, Text } from "@chakra-ui/react";

export function CardAtividadeItem(props: { Item: string, Tipo: string }) {
    return (
        <WrapItem>
            <Text fontSize='smaller'><strong>{props.Tipo}</strong>: {props.Item}</Text>
        </WrapItem>
    )
}