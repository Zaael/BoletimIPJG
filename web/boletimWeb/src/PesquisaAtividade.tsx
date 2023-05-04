import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import TagsSociedades from "./TagsSociedades";
import { CardAtividade } from "./CardAtividade";
import { useState } from "react";
import { atividade } from "./types/atividade";

export function PesquisaAtividade(props: {
  lista: atividade[];
}) {
  const [filtro, setFiltro] = useState('');
  const [filtroTag, setFiltroTag] = useState('');


  var listaFiltrada = filtro.length > 1 ? props.lista
  .filter(element => element.descricao.toString().toLowerCase()
  .includes(filtro.toLowerCase())) 
    : props.lista;

  listaFiltrada = filtroTag.length > 2 ? 
  listaFiltrada.filter(element => element.sociedadeInterna?.match(filtroTag))
    : listaFiltrada;

  return (
    <VStack p={5}>
      <InputGroup w={"100%"}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input onChange={ (e) => setFiltro(e.target.value)} type="tel" placeholder="Pesquisar" />
      </InputGroup>
      <TagsSociedades setFiltroTag={setFiltroTag}></TagsSociedades>
      <CardAtividade lista={listaFiltrada}></CardAtividade>
    </VStack>
  );
}