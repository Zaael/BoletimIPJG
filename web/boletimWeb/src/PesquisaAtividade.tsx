import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import TagsSociedades from "./TagsSociedades";
import { CardAtividade } from "./CardAtividade";
import { useContext, useEffect, useState } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";

export function PesquisaAtividade() {
  const { filtro, setFiltro, filtrarAtividades } = useContext(AtividadeContext);

  useEffect(() => {
    filtrarAtividades();
  }, [filtro]);

  function aplicarFiltro(e: any) {
    var filtroInput = e.target.value;
    setFiltro(filtroInput);
  }

  return (
    <VStack p={5}>
      <InputGroup w={"100%"}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input value={filtro} onChange={(e) => aplicarFiltro(e)} type="tel" placeholder="Pesquisar" />
      </InputGroup>
      <TagsSociedades></TagsSociedades>
      <CardAtividade></CardAtividade>
    </VStack>
  );
}