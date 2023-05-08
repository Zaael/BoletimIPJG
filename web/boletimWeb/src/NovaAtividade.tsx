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
} from "@chakra-ui/react";
import { Controller, Resolver, useForm } from "react-hook-form";
import dados, { Lista } from './dados';
import { atividade } from "./types/atividade";
import { supabase } from "./SupaBaseConnectionAPI";
import { useContext } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";

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
          <ModalBody>
            <NovaAtividade onClose={props.onClose}></NovaAtividade>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => props.onClose()}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export function NovaAtividade(props: {
  onClose: Function;
}) {
  const toast = useToast();
  const {setAtividades} = useContext(AtividadeContext);

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
    formState: { errors, isSubmitting },
  } = useForm<atividade>({ resolver });

  function onSubmit(data: atividade) {
    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        
        const { data: response, error } = await supabase
        .from('atividades')
        .insert(data).select("*")
        
        if (response) {
          setAtividades(response);
        }
        
        toast({
          title: 'Atividade incluída',
          //description: "nós incluímos a atividade para você",
          status: 'success',
          duration: 3000,
          position:'top-right',
          isClosable: true,
        })
        props.onClose();
        
        resolve();
      }, 3000);
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrap spacing="30px">
        <WrapItem>
          <FormControl isInvalid={errors.descricao? true : false}>
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
          <FormControl isInvalid={errors.dataHora? true : false}>
            <FormLabel htmlFor='dataHora'>Data e Hora</FormLabel>
            <Input id="dataHora" variant="flushed" type="datetime-local" placeholder="Data e Hora" {...register('dataHora', {
              required: 'Preenhca uma data e horário',
            })} />
            <FormErrorMessage>
              <span>{errors.dataHora?.message?.toString()}</span>
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <WrapItem>
          <FormControl isInvalid={errors.local? true : false}>
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
          <FormControl isInvalid={errors.preletor? true : false}>
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
          <FormControl isInvalid={errors.banda? true : false}>
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
          <FormControl isInvalid={errors.sociedadeInterna?  true : false}>
            <FormLabel htmlFor='sociedadeInterna'>Sociedade Interna</FormLabel>
            <Select id="sociedadeInterna" variant="flushed" placeholder="Selecione..." {...register('sociedadeInterna', {
              required: 'Preenhca o sociedadeInterna',
            })}>
              {
                Lista.map((sigla) =>(
                  <option value={sigla.sigla} key={sigla.sigla}>{sigla.sigla}</option>
                ))
              }
            </Select>
            <FormErrorMessage>
              <span>{errors.sociedadeInterna?.message?.toString()}</span>
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <Button type="submit" isLoading={isSubmitting} m={"30px 0"} colorScheme="blue" mr={3}>
          Save
        </Button>
      </Wrap>
    </form>
  );
}
