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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
import { PesquisaAtividade } from "./PesquisaAtividade";
import { ModalNovaAtividade } from "./NovaAtividade";
import { AtividadeContextProvider } from "./contexts/ListaAtividadesContext";
import { HeadingIgreja, LogoIgreja } from "./Marca";

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
            <LogoIgreja></LogoIgreja>
            <HeadingIgreja></HeadingIgreja>

            <Center w="100%" p={2}>
                <Heading color={colorMode === "dark" ? "white" : "ump.500"}>Calendário</Heading>
            </Center>
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
            <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="xs"
                position="absolute"
                bottom={4}
                left={4}
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />
        </Box>
    );
}
export default App;
