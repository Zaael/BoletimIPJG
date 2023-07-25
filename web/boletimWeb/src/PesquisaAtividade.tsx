import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement, VStack } from "@chakra-ui/react";
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
    <Flex direction={"column"} paddingTop={2}>
      <Flex direction={"row"} gap={4} wrap="wrap" width={["xs","sm","md"]} margin={"auto"}>
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            paddingRight={4}
            children={<SearchIcon color="gray.300" />}
          />
          <Input value={filtro} onChange={(e) => aplicarFiltro(e)} type="text" placeholder="Pesquisar"/>
        </InputGroup>
        <InputGroup>
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
      <Divider></Divider>
    </Flex>
  );
}