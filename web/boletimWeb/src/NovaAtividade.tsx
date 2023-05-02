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
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import dados, { Lista } from './dados';

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
            <NovaAtividade></NovaAtividade>
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

export function NovaAtividade() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        dados.push(data);
        console.log(dados);
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrap spacing="30px">
        <WrapItem>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='name'>Descrição</FormLabel>
            <Input id="name" variant="flushed" placeholder="Descrição" {...register('name', {
              required: 'Preenhca uma descrição',
            })} />
            <FormErrorMessage>
              {errors.name?.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <WrapItem>
          <FormControl isInvalid={errors.dataHora}>
            <FormLabel htmlFor='dataHora'>Data e Hora</FormLabel>
            <Input id="dataHora" variant="flushed" type="datetime-local" placeholder="Data e Hora" {...register('dataHora', {
              required: 'Preenhca uma data e horário',
            })} />
            <FormErrorMessage>
              {errors.dataHora?.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <WrapItem>
          <FormControl isInvalid={errors.local}>
            <FormLabel htmlFor='local'>Local</FormLabel>
            <Input id="local" variant="flushed" placeholder="Local" {...register('local', {
              required: 'Preenhca o local',
            })} />
            <FormErrorMessage>
              {errors.local?.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <WrapItem>
          <FormControl isInvalid={errors.preletor}>
            <FormLabel htmlFor='preletor'>Preletor</FormLabel>
            <Input id="preletor" variant="flushed" placeholder="preletor" {...register('preletor', {
              required: 'Preenhca o preletor',
            })} />
            <FormErrorMessage>
              {errors.preletor?.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <WrapItem>
          <FormControl isInvalid={errors.banda}>
            <FormLabel htmlFor='banda'>Banda</FormLabel>
            <Input id="banda" variant="flushed" placeholder="banda" {...register('banda', {
              required: 'Preenhca o banda',
            })} />
            <FormErrorMessage>
              {errors.banda?.message}
            </FormErrorMessage>
          </FormControl>
        </WrapItem>
        <WrapItem>
          <FormControl isInvalid={errors.sociedadeInterna}>
            <FormLabel htmlFor='sociedadeInterna'>Sociedade Interna</FormLabel>
            <Select id="sociedadeInterna" variant="flushed" placeholder="Selecione..." {...register('sociedadeInterna', {
              required: 'Preenhca o sociedadeInterna',
            })}>
              {
                Lista.map((sigla) =>(
                  <option value={sigla.sigla}>{sigla.sigla}</option>
                ))
              }
              {/* <option value='UMP'>UMP</option>
              <option value='SAF'>SAF</option>
              <option value='UCP'>UCP</option>
              <option value='UPA'>UPA</option>
              <option value='Todas'>Todas</option> */}
            </Select>
            <FormErrorMessage>
              {errors.sociedadeInterna?.message}
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
