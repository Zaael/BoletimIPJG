import { Box } from "@chakra-ui/react";
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
