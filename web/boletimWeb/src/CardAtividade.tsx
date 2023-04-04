import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react'
import { Box, Card, CardBody, Center, Container, Heading, Text, Stack, Flex, Spacer, PropsOf, Wrap, WrapItem, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import moment from 'moment'
import { CardAtividadeItem } from './CardAtividadeItem';
import { CardAtividadeButtons } from './CardAtividadeButtons';

export function CardAtividade(props:{
        Name: string, 
        DataHora: Date, 
        Local: string,
        Preletor: string,
        Banda: string,
        SantaCeia: boolean,
        Logo: string,
    })
{
    moment.locale('pt-br');
    moment.updateLocale('en', {
        monthsShort : [
            "Jan", "Feb", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ],
        weekdays : [
            "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"
        ]
    });    
    return(
        <Box w={'26rem'}>
            <Card   direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    m={"1.5"}
                    p={"1"}>
                <Image objectFit='cover' 
                        src= {props.Logo} 
                        alt='Logo Sociedade Interna'
                        maxW={{ base: '100%', sm: '24' }} ></Image>
                <Stack>
                    <CardBody>
                        <Text fontSize='md'>{props.Name} {props.SantaCeia ? <Text as='b'>- Santa Ceia</Text> : ""}</Text>
                        <Flex>
                            <Text fontSize='sm'>{moment(props.DataHora).format("DD") + "|"+ moment(props.DataHora).format("MMM") + " - " + moment(props.DataHora).format("dddd") }</Text>
                            <Spacer />
                            <Text fontSize='sm'>{moment(props.DataHora).format("HH:mm")}</Text>                            
                        </Flex>
                        <Divider m={"2"}></Divider>
                        <Wrap spacing={'1rem'}>
                        {props.Local ? <CardAtividadeItem  Item= {props.Local} Tipo="Local"></CardAtividadeItem> : ""}                                                 
                        {props.Preletor ? <CardAtividadeItem  Item= {props.Preletor} Tipo="Preletor"></CardAtividadeItem> : ""}
                        {props.Banda? <CardAtividadeItem  Item= {props.Banda} Tipo="Banda"></CardAtividadeItem> : ""}                                               
                        </Wrap>
                    </CardBody>
                    <CardAtividadeButtons></CardAtividadeButtons>                        
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