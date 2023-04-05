import { useState } from 'react'
import { Box, Button, ButtonGroup, Card, Center, Container, Divider, Flex, Heading, HStack, LinkBox, Stack, VStack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { CardAtividade } from './CardAtividade'
import { PesquisaAtividade } from './PesquisaAtividade';
import TagsSociedades from './TagsSociedades';
//import { TagsSociedades } from './TagsSociedades';

function App() {
  const [count, setCount] = useState(0)

  const dados = {

  };

  return (
    <Box w='100%' p={10}>
      <Heading color={'#4f9cec'} as='h3' size='lg'>Boletim IPJG</Heading>
      <Center w='100%'>
        <Heading color={'#046dd8'}>Programações</Heading>
      </Center>
      <Divider />
      <VStack p={10}>
        <TagsSociedades></TagsSociedades>
        <PesquisaAtividade></PesquisaAtividade>
        <CardAtividade Name={'Culto Matutino'}
          DataHora={new Date(2023, 3, 12, 9, 30)}
          Local={'Igreja'}
          Preletor={'Rev. Jair'}
          Banda={'MAP'}
          SantaCeia={false}
          Logo={'../ump.png'}></CardAtividade>
        <CardAtividade Name={'Culto Vespertino'}
          DataHora={new Date(2023, 3, 12, 18)}
          Local={'Igreja'}
          Preletor={'Rev. Jair'}
          Banda={'Second'}
          SantaCeia={true}
          Logo={'../ump.png'}></CardAtividade>
        <CardAtividade Name={'Estudo UMP - Livro cap 8'}
          DataHora={new Date(2023, 3, 16, 18)}
          Local={'Nice e Edevaldo'}
          Preletor={'Presb. Douglas'}
          Banda={'Pedro'}
          SantaCeia={false}
          Logo={'../ump.png'}></CardAtividade>
      </VStack>
    </Box>
  )
}

export default App
