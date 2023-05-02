import { useState } from 'react'
import { Box, Button, Text, Image, Card, Center, Container, Divider, Flex, Heading, HStack, LinkBox, Stack, VStack, Tag, TagCloseButton, TagLabel, Spacer, useColorMode, IconButton, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { PesquisaAtividade } from './PesquisaAtividade';
import { AddIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun } from "react-icons/fa";
import dados from './dados';
import { ModalNovaAtividade } from './NovaAtividade';

function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={10} marginLeft={'auto'} marginRight={'auto'} w={'100%'} maxW={'container.lg'} alignItems={'center'}>
      <Image objectFit='cover'
                    src='./IPJG.png'
                    alt='Logo IPJG'
                    maxW={{ base: '100%', sm: '24' }} ></Image>
      <Heading color={'#243A6D'} as='h1' size='lg'>Boletim IPJG</Heading>
      <Center w='100%' p={2}>
        <Heading color={'#243A6D'}>Calendário</Heading>
      </Center>
      <Divider />
      <VStack p={5}>
        <PesquisaAtividade lista={dados}></PesquisaAtividade>
        
        {/* nova atividade */}
        <Button onClick={onOpen} alignSelf={'end'} leftIcon={<AddIcon />}  colorScheme='green' size={'md'}>Nova programação</Button>
        <ModalNovaAtividade isOpen={isOpen} onClose={onClose} onOpen={onOpen}></ModalNovaAtividade>
        {/* nova atividade */}
      </VStack>
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        position="absolute"
        bottom={4}
        left={4}
        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
    </Box>
  )
}
export default App
