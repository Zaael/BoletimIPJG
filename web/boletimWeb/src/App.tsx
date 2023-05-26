import { Box, Button, Divider, VStack, useDisclosure, Tag, TagLabel, } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PesquisaAtividade } from "./PesquisaAtividade";
import { ModalNovaAtividade } from "./NovaAtividade";
import { AtividadeContextProvider } from "./contexts/ListaAtividadesContext";
import { Cabecalho } from "./Header";
import { MenuTabs } from "./Menu";

function App() {
    
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
        </Box>
    );
}
export default App;
