import {
    Box,
    Button,
    Image,
    Center,
    Divider,
    Heading,
    VStack,
    useColorMode,
    IconButton,
    useDisclosure,
    Flex,
    Menu,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PesquisaAtividade } from "./PesquisaAtividade";
import { ModalNovaAtividade } from "./NovaAtividade";
import { AtividadeContextProvider } from "./contexts/ListaAtividadesContext";
import { Cabecalho } from "./Header";
import { MenuTabs } from "./Menu";

function App() {
    const { toggleColorMode, colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            p={"5"}
            marginLeft={"auto"}
            marginRight={"auto"}
            w={"100%"}
            maxW={"container.lg"}
            alignItems={"center"}
        >
            <Cabecalho></Cabecalho>
            <MenuTabs></MenuTabs>
            <Divider></Divider>
            <VStack p={5}>
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
            </VStack>
        </Box>
    );
}
export default App;
