import { Tab, TabList, Tabs } from "@chakra-ui/react";

export function MenuTabs() {
    return (
        <Tabs isFitted variant='enclosed'>
            <TabList>
                <Tab isDisabled>Escalas</Tab>
                <Tab>Calendário</Tab>
                <Tab isDisabled>Mural de Avisos</Tab>
                <Tab isDisabled>Caronas</Tab>
            </TabList>
        </Tabs>
    )
}