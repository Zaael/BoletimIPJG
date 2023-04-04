import { useState } from 'react'
import { Box, Button, ButtonGroup, Card, Center, Container, Divider, Flex, Heading, HStack, LinkBox, Stack, VStack } from '@chakra-ui/react'
import { CardAtividade } from './CardAtividade'
import { PesquisaAtividade } from './PesquisaAtividade';
import { TagsSociedades } from './TagsSociedades';

function App() {
  const [count, setCount] = useState(0)
  
  const dados = {
    
  };
  
  const Lista= [
    { sigla: "UMP", cor: "purple" },
    { sigla: "UPA", cor: "blue" },
    { sigla: "SAF", cor: "pink" },
    { sigla: "Cultos", cor: "blue" },
    { sigla: "UPH", cor: "orange" }
  ];
  
  return (
    <Box w='100%' p={10}>
      <Flex>
        <Heading color={'#4f9cec'} as='h3' size='lg'>Boletim IPJG</Heading>
      </Flex>
        <Center w='100%'>        
          <Heading color={'#046dd8'}>Programações</Heading>
      </Center>      
      <Divider/>
      <TagsSociedades Lista= {Lista} ></TagsSociedades>
      <VStack p={10}>
        <PesquisaAtividade></PesquisaAtividade>
        <CardAtividade  Name={'Culto Matutino'} 
                        DataHora= { new Date(2023,3,12,9,30)}
                        Local= {'Igreja'}
                        Preletor= {'Rev. Jair'}
                        Banda= {'MAP'}
                        SantaCeia= {false}
                        Logo={'../ump.png'}></CardAtividade>
        <CardAtividade  Name={'Culto Vespertino'} 
                        DataHora= { new Date(2023,3,12,18)}
                        Local= {'Igreja'}
                        Preletor= {'Rev. Jair'}
                        Banda= {'Second'}
                        SantaCeia= {true}
                        Logo={'../ump.png'}></CardAtividade>
        <CardAtividade  Name={'Estudo UMP - Livro cap 8'} 
                        DataHora= { new Date(2023,3,16,18)}
                        Local= {'Nice e Edevaldo'}
                        Preletor= {'Presb. Douglas'}
                        Banda= {'Pedro'}
                        SantaCeia= {false}
                        Logo={'../ump.png'}></CardAtividade>
      </VStack>     
    </Box>
  )
}

export default App
