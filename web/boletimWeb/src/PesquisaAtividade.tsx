import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, HStack, Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import TagsSociedades from "./TagsSociedades";
import { CardAtividade } from "./CardAtividade";
import { useContext, useEffect, useState } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";

export function PesquisaAtividade() {
  const { filtro, setFiltro, filtrarAtividades, filtroData, setFiltroData } = useContext(AtividadeContext);

  useEffect(() => {
    filtrarAtividades();
  }, [filtro]);

  useEffect(() => {
    filtrarAtividades();
  }, [filtroData]);

  function aplicarFiltro(e: any) {
    var filtroInput = e.target.value;
    setFiltro(filtroInput);
  }

  function aplicarFiltroData(e: any) {
    var filtroInputData = e.target.value;
    console.log(filtroInputData);
    setFiltroData(filtroInputData);
  }

  return (
    <VStack p={5}>
      <Flex direction={"row"} w={[200, 300, 400]} justifyContent={"center"} gap={4} alignItems="center" >
        <InputGroup maxWidth={"50%"}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input value={filtro} onChange={(e) => aplicarFiltro(e)} type="tel" placeholder="Pesquisar" />
        </InputGroup>
        <InputGroup maxWidth={"50%"} >
          <Input
            placeholder="Selecione a data"
            color={"gray.300"}
            size="md"
            type="date"
            value={filtroData}
            onChange={(e) => aplicarFiltroData(e)}
          />
        </InputGroup>
      </Flex >
      <TagsSociedades></TagsSociedades>
      <CardAtividade></CardAtividade>
    </VStack>
  );
}