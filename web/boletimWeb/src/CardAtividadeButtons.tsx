import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, IconButton, Spacer } from "@chakra-ui/react";

export function CardAtividadeButtons() {
    return (
        <Flex minWidth='max-content' overflow={"visible"} alignContent={'end'}>
            <Spacer />
            <IconButton icon={<ExternalLinkIcon />} variant={'ghost'} aria-label='Compartilhar' colorScheme='blue'></IconButton>
            <IconButton icon={<ViewIcon />} variant={'ghost'} aria-label='Visualiar folheto' colorScheme='blue'></IconButton>
        </Flex>
    )
}