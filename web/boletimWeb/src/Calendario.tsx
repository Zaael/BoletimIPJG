import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, useDisclosure, VStack } from "@chakra-ui/react";
import { AtividadeContextProvider } from "./contexts/ListaAtividadesContext";
import { ModalNovaAtividade } from "./NovaAtividade";
import { PesquisaAtividade } from "./PesquisaAtividade";

export default function Calendario() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex direction={"column"} w={'100%'} p={5}>
            <AtividadeContextProvider>
                <PesquisaAtividade></PesquisaAtividade>
                <Button
                    onClick={onOpen}
                    alignSelf={"end"}
                    leftIcon={<AddIcon />}
                    colorScheme="green"
                    size={"md"}
                >
                    Nova programação
                </Button>
                <ModalNovaAtividade
                    isOpen={isOpen}
                    onClose={onClose}
                    onOpen={onOpen}
                ></ModalNovaAtividade>
            </AtividadeContextProvider>
        </Flex >
    )
}