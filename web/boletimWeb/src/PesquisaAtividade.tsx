import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import TagsSociedades from "./TagsSociedades";
import { CardAtividade } from "./CardAtividade";
import { useContext, useState } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";

export function PesquisaAtividade() {
  const {atividades, setAtividades} = useContext(AtividadeContext);
  const [filtro, setFiltro] = useState('');
  const [filtroTag, setFiltroTag] = useState('');


  var listaFiltrada = filtro.length > 1 ? atividades
  .filter(element => element.descricao.toString().toLowerCase()
  .includes(filtro.toLowerCase())) 
    : atividades;

  //setAtividades(listaFiltrada);

  listaFiltrada = filtroTag.length > 1 ? 
  listaFiltrada.filter(element => element.sociedadeInterna?.match(filtroTag))
    : listaFiltrada;

  //setAtividades(listaFiltrada);

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
      <CardAtividade></CardAtividade>
    </VStack>
  );
}