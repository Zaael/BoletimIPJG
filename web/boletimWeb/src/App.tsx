import { Box } from "@chakra-ui/react";
import { Cabecalho } from "./Header";
import { MenuTabs } from "./Menu";

function App() {

    return (
        <Box
            p={"0 0 0 0"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop="2"
            width={["container.sm", "container.md", "container.lg"]}
            alignItems={"center"}
        >
            <Cabecalho></Cabecalho>
            <MenuTabs></MenuTabs>
        </Box>
    );
}
export default App;
