import { useState } from 'react'
import { Box, Button, Text, Card, Center, Container, Divider, Flex, Heading, HStack, LinkBox, Stack, VStack, Tag, TagCloseButton, TagLabel, Spacer } from '@chakra-ui/react'
import { CardAtividade } from './CardAtividade'
import { PesquisaAtividade } from './PesquisaAtividade';
import TagsSociedades from './TagsSociedades';
import { AddIcon } from '@chakra-ui/icons';

function App() {
  const [count, setCount] = useState(0)

  const dados = [];
  dados.push({
    Name: 'Culto Matutino',
    DataHora: new Date(2023, 2, 12, 9, 30),
    Local: 'Igreja',
    Preletor: 'Rev. Jair',
    Banda: 'MAP',
    SantaCeia: false,
    Logo: '../ump.png',
    SociedadeInterna: {sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    Name: 'Culto Vespertino',
    DataHora: new Date(2023, 2, 12, 9, 30),
    Local: 'Igreja',
    Preletor: 'Rev. Jair',
    Banda: 'Second',
    SantaCeia: true,
    Logo: '../ump.png',
    SociedadeInterna: {sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    Name: 'Estudo UMP - Livro cap 8',
    DataHora: new Date(2023, 2, 11, 9, 30),
    Local: 'Nice e Edevaldo',
    Preletor: 'Presb. Douglas',
    Banda: 'Pedro',
    SantaCeia: false,
    Logo: '../ump.png',
    SociedadeInterna: {sigla: 'UMP', cor: 'purple'}
  })  
  return (
    <Box p={10} w={'100%'} maxW={'container.lg'} alignItems={'center'}>
      <Text color={'#4f9cec'} as='h3' size='lg'>Boletim IPJG</Text>
      <Center w='100%' p={2}>
        <Heading color={'#046dd8'}>Calendário</Heading>
      </Center>
      <Divider />
      <VStack p={5}>
        <PesquisaAtividade></PesquisaAtividade>
        <TagsSociedades></TagsSociedades>
        <CardAtividade lista={dados} ></CardAtividade>
        <Button alignSelf={'end'} leftIcon={<AddIcon />} colorScheme='green' size={'md'}>Nova programação</Button>
      </VStack>
      <Flex >
        <Spacer></Spacer>
        <Spacer></Spacer>
      </Flex>
    </Box>
  )
}

export default App
