import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import TagsSociedades from "./TagsSociedades";
import { CardAtividade } from "./CardAtividade";
import { useContext, useState } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";

export function PesquisaAtividade() {
  const {filtrarAtividades} = useContext(AtividadeContext);
  const [filtro, setFiltro] = useState('');

  function aplicarFiltro(filtroInput: string){
    filtrarAtividades(filtroInput, false);
    setFiltro(filtroInput);
  }

  return (
    <VStack p={5}>
      <InputGroup w={"100%"}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input onChange={ (e) => aplicarFiltro(e.target.value)} type="tel" placeholder="Pesquisar" />
      </InputGroup>
      <TagsSociedades></TagsSociedades>
      <CardAtividade></CardAtividade>
    </VStack>
  );
}