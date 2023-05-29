import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Calendario from "./Calendario";
import Vazia from "./PaginaEmConstrucao";

export function MenuTabs() {
    return (
        <Tabs isFitted variant='enclosed' defaultIndex={1}>
            <TabList>
                <Tab >Escalas</Tab>
                <Tab >Calendário</Tab>
                <Tab >Mural de Avisos</Tab>
                <Tab >Caronas</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Vazia></Vazia>
                </TabPanel>
                <TabPanel justifyItems={'center'}>
                    <Calendario></Calendario>
                </TabPanel>
                <TabPanel>
                    <Vazia></Vazia>
                </TabPanel>
                <TabPanel>
                    <Vazia></Vazia>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}