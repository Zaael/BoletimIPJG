import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Calendario from "./Calendario";
import Vazia from "./PaginaEmConstrucao";

export function MenuTabs() {
    return (
        <Tabs isFitted variant='enclosed' defaultIndex={1} width={["container.sm", "container.md", "container.lg"]}>
            <TabList width={["container.sm", "container.md", "container.lg"]}>
                <Tab >Escalas</Tab>
                <Tab >Calendário</Tab>
                <Tab >Mural</Tab>
                <Tab >Caronas</Tab>
            </TabList>
            <TabPanels>
                <TabPanel width={"max-content"}>
                    <Vazia></Vazia>
                </TabPanel>
                <TabPanel width={["container.sm", "container.md", "container.lg"]} marginLeft={"auto"} marginRight={"auto"}>
                    <Calendario></Calendario>
                </TabPanel>
                <TabPanel width={"max-content"}>
                    <Vazia></Vazia>
                </TabPanel>
                <TabPanel width={"max-content"}>
                    <Vazia></Vazia>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}