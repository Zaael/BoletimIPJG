import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Wrap,
  WrapItem,
  useToast,
  Switch,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Resolver, useForm, } from "react-hook-form";
import { atividade } from "./types/atividade";
import { TipoAtividades, supabase, Atividades } from "./SupaBaseConnectionAPI";
import { useContext, useState } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";
import { SociedadeInternaContext } from "./contexts/SociedadesInternasContext";
import { CardItem } from "./CardAtividade";
import moment from "moment";

export function ModalNovaAtividade(props: {
  isOpen: boolean;
  onClose: Function;
  onOpen: Function;
}) {
  return (
    <Box>
      <Modal onClose={() => props.onClose()} isOpen={props.isOpen} size={"xl"}>
        <ModalOverlay />
        <ModalContent aria-modal>
          <ModalHeader>Nova atividade</ModalHeader>
          <ModalCloseButton />
          <NovaAtividade onClose={props.onClose}></NovaAtividade>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export function NovaAtividade(props: {
  onClose: Function;
}) {
  const listaAtividades: JSX.Element[] = [];
  const toast = useToast();
  const { setAtividadesFiltradas, atividades } = useContext(AtividadeContext);
  const { tags } = useContext(SociedadeInternaContext);
  const [cards, setCards] = useState(listaAtividades);

  function ValidaConflitoProgramacoes(data: string, local: string) {
    console.log(moment(data).format("YYYY-MM-DD"));
    const atividadeEncontradas = atividades?.filter((ativ) => ativ.dataHora.match(moment(data).format("YYYY-MM-DD").toString()));
    console.log(atividadeEncontradas);
    atividadeEncontradas.length >= 1 ?
      setCards(CardItem(atividadeEncontradas, "sm")) : setCards(listaAtividades);
  }

  // useEffect(() => {
  //   filtrarAtividades();
  // }, [filtro]);

  const resolver: Resolver<atividade> = async (values) => {
    return {
      values: values.descricao ? values : {},
      errors: !values.descricao
        ? {
          descricao: {
            type: 'required',
            message: 'This is required.',
          },
        }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<atividade>({ resolver });

  function onSubmit(data: atividade) {
    return new Promise<void>((resolve) => {
      setTimeout(async () => {

        const { data: response, error } = await supabase
          .from('atividades')
          .insert(data);

        const { data: Atividades } = await supabase
          .from("atividades")
          .select("*")

        if (Atividades) {
          setAtividadesFiltradas(Atividades);
        }

        toast({
          title: 'Atividade incluída',
          //description: "nós incluímos a atividade para você",
          status: 'success',
          duration: 3000,
          position: 'top-right',
          isClosable: true,
        })
        props.onClose();

        resolve();
      }, 3000);
    })
  }

  const tipoAtividadeWatch = watch("tipoAtividade");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Wrap spacing="30px">
          <WrapItem>
            <FormControl isInvalid={errors.tipoAtividade ? true : false}>
              <FormLabel htmlFor='tipoAtividade'>Tipo da programação</FormLabel>
              <Select id="tipoAtividade" variant="flushed" placeholder="Selecione..." {...register('tipoAtividade', {
                required: 'Preenhca o tipo da programação',
              })}>
                {
                  TipoAtividades?.map((tipo) => (
                    <option value={tipo.cod} key={tipo.cod}>{tipo.atividade}</option>
                  ))
                }
              </Select>
              <FormErrorMessage>
                <span>{errors.tipoAtividade?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          {tipoAtividadeWatch == 1 && <WrapItem>
            <FormControl isInvalid={errors.santaCeia ? true : false}>
              <FormLabel htmlFor='santaCeia'>Santa Ceia?</FormLabel>
              <Switch id="santaCeia" size={'md'} variant="flushed" placeholder="Santa Ceia" {...register('santaCeia', {
                required: 'informe se é santa ceia'
              })} />
              <FormErrorMessage>
                <span>{errors.santaCeia?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          }
          <WrapItem>
            <FormControl isInvalid={errors.descricao ? true : false}>
              <FormLabel htmlFor='descricao'>Descrição</FormLabel>
              <Input id="descricao" variant="flushed" placeholder="Descrição" {...register('descricao', {
                required: 'Preenhca uma descrição'
              })} />
              <FormErrorMessage>
                <span>{errors.descricao?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl isInvalid={errors.dataHora ? true : false}>
              <FormLabel htmlFor='dataHora'>Data e Hora</FormLabel>
              <Input id="dataHora" variant="flushed" type="datetime-local" placeholder="Data e Hora" {...register('dataHora', {
                required: 'Preenhca uma data e horário',
                valueAsDate: true,
                onChange: (e) => ValidaConflitoProgramacoes(e.target.value, "")
              })} />
              <FormErrorMessage>
                <span>{errors.dataHora?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl isInvalid={errors.local ? true : false}>
              <FormLabel htmlFor='local'>Local</FormLabel>
              <Input id="local" variant="flushed" placeholder="Local" {...register('local', {
                required: 'Preenhca o local',
              })} />
              <FormErrorMessage>
                <span>{errors.local?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl isInvalid={errors.preletor ? true : false}>
              <FormLabel htmlFor='preletor'>Preletor</FormLabel>
              <Input id="preletor" variant="flushed" placeholder="preletor" {...register('preletor', {
                required: 'Preenhca o preletor',
              })} />
              <FormErrorMessage>
                <span>{errors.preletor?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl isInvalid={errors.banda ? true : false}>
              <FormLabel htmlFor='banda'>Banda</FormLabel>
              <Input id="banda" variant="flushed" placeholder="banda" {...register('banda', {
                required: 'Preenhca o banda',
              })} />
              <FormErrorMessage>
                <span>{errors.banda?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl isInvalid={errors.sociedadeInterna ? true : false}>
              <FormLabel htmlFor='sociedadeInterna'>Sociedade Interna</FormLabel>
              <Select id="sociedadeInterna" variant="flushed" placeholder="Selecione..." {...register('sociedadeInterna', {
                required: 'Preenhca o sociedadeInterna',
              })}>
                {
                  tags.map((sigla) => (
                    <option value={sigla.sigla} key={sigla.sigla}>{sigla.sigla}</option>
                  ))
                }
              </Select>
              <FormErrorMessage>
                <span>{errors.sociedadeInterna?.message?.toString()}</span>
              </FormErrorMessage>
            </FormControl>
          </WrapItem>
          {cards.length >= 1 && <WrapItem>
            <VStack >
              <Text as={"cite"} size={"sm"} color="tomato"> Existem as seguintes programações na data inserida:</Text>
              {cards}
            </VStack>
          </WrapItem>}
        </Wrap>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" isLoading={isSubmitting} m={"30px 0"} colorScheme="blue" mr={3}>
          Salvar
        </Button>
        <Button onClick={() => props.onClose()}>Fechar</Button>
      </ModalFooter>
    </form>
  );
}