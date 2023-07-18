import { Box, Card, CardBody, Text, Stack, Flex, Spacer, Wrap, Divider } from '@chakra-ui/react'
import moment from 'moment'
import { CardAtividadeItem } from './CardAtividadeItem';
import { CardAtividadeButtons } from './CardAtividadeButtons';
import { useContext } from 'react';
import { AtividadeContext } from './contexts/ListaAtividadesContext';
import { LogoSociedadeInterna } from './Marca';
import { vw_atividade } from './types/atividade';


export function CardAtividade() {
    ConfiguraMomentJs();
    const { atividadesFiltradas } = useContext(AtividadeContext);
    const cards = CardItem(atividadesFiltradas, 'sm');

    return (
        <Box overflow={'auto'} h={'2xl'}>
            {cards}
        </Box>
    )
}

export function CardItem(atividades: vw_atividade[], size: string) {
    const cards = atividades.map((atividade) => (
        <Box w={[200, 300, 400]} maxW={"100%"} key={atividade.id}>
            <div>
                <Card direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    m={"1.5"}
                    pt={"1"}
                    pb={"0"}
                    size={size}
                    borderColor={atividade.sociedadeInterna?.toLowerCase().concat(".500")}
                >
                    <LogoSociedadeInterna sigla={atividade.sociedadeInterna ? atividade.sociedadeInterna : ""}></LogoSociedadeInterna>
                    <Stack>
                        <CardBody>
                            <Text fontSize='md' as='b'>{atividade.descricao} {atividade.santaCeia ? <Text as='b'> - Santa Ceia</Text> : ""}
                            </Text>
                            <Flex>
                                <Text fontSize='sm'>{moment(atividade.dataHora).format("DD") + "/" + moment(atividade.dataHora).format("MM") + " - " + moment(atividade.dataHora).format("dddd")}</Text>
                                <Spacer />
                                <Text fontSize='sm'>{moment(atividade.dataHora).format("HH:mm")}</Text>
                            </Flex>
                            <Divider m={"2"}></Divider>
                            <Wrap spacing={'1rem'}>
                                {atividade.local ? <CardAtividadeItem Item={atividade.local} Tipo="Local"></CardAtividadeItem> : ""}
                                {atividade.preletor ? <CardAtividadeItem Item={atividade.preletor} Tipo="Preletor"></CardAtividadeItem> : ""}
                                {atividade.banda ? <CardAtividadeItem Item={atividade.banda} Tipo="Banda"></CardAtividadeItem> : ""}
                            </Wrap>
                            <CardAtividadeButtons arte={atividade.arte} ></CardAtividadeButtons>
                        </CardBody>
                    </Stack>
                </Card>
            </div>
        </Box >
    ));

    return cards;
}


function ConfiguraMomentJs() {
    moment.locale('pt-br');
    moment.updateLocale('en', {
        monthsShort: [
            "Jan", "Feb", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ],
        weekdays: [
            "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"
        ]
    });
}
// .color1 { #046dd8 };
// .color2 { #2a85e2 };
// .color3 { #4f9cec };
// .color4 { #75b4f5 };
// .color5 { #9acbff };