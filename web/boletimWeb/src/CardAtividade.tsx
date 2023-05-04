import { Box, Card, CardBody,Text, Stack, Flex, Spacer, Wrap, Divider} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import moment from 'moment'
import { CardAtividadeItem } from './CardAtividadeItem';
import { CardAtividadeButtons } from './CardAtividadeButtons';
import { atividade } from './types/atividade';


export function CardAtividade(props: {
    lista: atividade[],
}) {
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

    const cards = props.lista.map((atividade) => (
        <Box w={'26rem'} key={atividade.descricao}>
            <Card direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={"1.5"}
                p={"1"}
            >
                <Image objectFit='cover'
                    src={'./ump.png'}
                    alt='Logo Sociedade Interna'
                    maxW={{ base: '100%', sm: '24' }} ></Image>
                <Stack>
                    <CardBody>
                        <Text fontSize='md'>{atividade.descricao} {atividade.santaCeia ? <Text as='b'>- Santa Ceia</Text> : ""}</Text>
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
                    </CardBody>
                    <CardAtividadeButtons></CardAtividadeButtons>
                </Stack>
            </Card>
        </Box>
    ));
    
    return (
        <Box overflow={'auto'} h={'2xl'}>
            {cards}
        </Box>
    )
}

// .color1 { #046dd8 };
// .color2 { #2a85e2 };
// .color3 { #4f9cec };
// .color4 { #75b4f5 };
// .color5 { #9acbff };