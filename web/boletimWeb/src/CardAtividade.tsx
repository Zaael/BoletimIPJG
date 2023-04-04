import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react'
import { Box, Card, CardBody, Center, Container, Heading, Text, Stack, Flex, Spacer, PropsOf, Wrap, WrapItem, Divider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import moment from 'moment'

export function CardAtividade(props:{
        Name: string, 
        DataHora: Date, 
        Local: string,
        Preletor: string,
        Banda: string,
        SantaCeia: boolean,
    })
{
    moment.locale('pt-br');
    moment.updateLocale('en', {
        monthsShort : [
            "Jan", "Feb", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ]
    });
    moment.updateLocale('en', {
        weekdays : [
            "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"
        ]
    });
    return(
        <Box w={'24rem'}>
            <Card   direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    m={"1.5"}>
                <Image objectFit='cover' 
                        src='../ump.png' 
                        alt='Logo Sociedade Interna'
                        maxW={{ base: '100%', sm: '70px' }} ></Image>
                <Stack>
                    <CardBody>
                        <Text fontSize='md'>{props.Name}</Text>
                        <Flex>
                            <Text fontSize='sm'>{moment(props.DataHora).format("MMM") + "|"+ moment(props.DataHora).format("DD")}</Text>
                            <Spacer />
                            <Text fontSize='sm'>{moment(props.DataHora).format("HH:mm")}</Text>
                        </Flex>
                        <Divider m={"2"}></Divider>
                        <Wrap spacing={'1rem'}>
                        <WrapItem>
                            <Text fontSize='smaller'>Local: {props.Local}</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='smaller'>Preletor: {props.Preletor}</Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='smaller'>Banda: {props.Banda}</Text>
                        </WrapItem>
                        </Wrap>
                    </CardBody>
                </Stack>
            </Card>
        </Box>
    )
}

// .color1 { #046dd8 };
// .color2 { #2a85e2 };
// .color3 { #4f9cec };
// .color4 { #75b4f5 };
// .color5 { #9acbff };