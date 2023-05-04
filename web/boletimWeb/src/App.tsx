import { useEffect, useState } from "react";
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
import { atividade } from "./types/atividade";
import { supabase } from "./SupaBaseConnectionAPI";

const lista: atividade[] = [];

function App() {
    const { toggleColorMode, colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [atividades, setAtividades] = useState(lista);

    useEffect(() => {
        async function carregaDados() {
            let { data: atividades, error } = await supabase
                .from("atividades")
                .select("*");
            if (atividades) {
                setAtividades(atividades);
            }
        }
        carregaDados();
    }, []);

    return (
        <Box
            p={"5"}
            marginLeft={"auto"}
            marginRight={"auto"}
            w={"100%"}
            maxW={"container.lg"}
            alignItems={"center"}
        >
            <Image
                objectFit="cover"
                src="./IPJG.png"
                alt="Logo IPJG"
                maxW={{ base: "100%", sm: "16" }}
            ></Image>
            <Heading color={"#243A6D"} as="h2" size="sm">
                Boletim IPJG
            </Heading>
            <Center w="100%" p={2}>
                <Heading color={"#243A6D"}>Calendário</Heading>
            </Center>
            <Divider />
            <VStack p={5}>
                <PesquisaAtividade lista={atividades}></PesquisaAtividade>

                {/* nova atividade */}
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
                {/* nova atividade */}
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
