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
	useToast,
	Switch,
	VStack,
	Text,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import { Resolver, useForm } from "react-hook-form";
import { atividadeInsert } from "./types/atividade";
import { TipoAtividades, supabase, storage } from "./SupaBaseConnectionAPI";
import { useContext, useEffect, useState } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";
import { SociedadeInternaContext } from "./contexts/SociedadesInternasContext";
import { CardItem, ConfiguraMomentJs } from "./CardAtividade";
import moment from "moment";

export function ModalNovaAtividade(props: {
	isOpen: boolean;
	onClose: Function;
	onOpen: Function;
}) {
	return (
		<Box>
			<Modal
				onClose={() => props.onClose()}
				isOpen={props.isOpen}
				size={["xs", "sm", "xl"]}
			>
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

export function NovaAtividade(props: { onClose: Function }) {
	const listaAtividades: JSX.Element[] = [];
	const toast = useToast();
	const { setAtividadesFiltradas, atividades, setAtividades } =
		useContext(AtividadeContext);
	const { tags } = useContext(SociedadeInternaContext);
	const [cards, setCards] = useState(listaAtividades);
	ConfiguraMomentJs();

	function ValidaConflitoProgramacoes(data: string) {
		console.log(data);
		const atividadeEncontradas = atividades?.filter((ativ) =>
			ativ?.dataHora?.match(moment(data).format("YYYY-MM-DD").toString())
		);
		atividadeEncontradas.length >= 1
			? setCards(CardItem(atividadeEncontradas, "sm"))
			: setCards(listaAtividades);
	}

	const resolver: Resolver<atividadeInsert> = async (values) => {
		return {
			values: values.descricao ? values : {},
			errors: !values.descricao
				? {
						descricao: {
							type: "required",
							message: "This is required.",
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
	} = useForm<atividadeInsert>({ resolver });

	function onSubmit(data: atividadeInsert) {
		const { arteFile, ...resto } = data;
		console.log(resto.dataHora);
		return new Promise<void>((resolve) => {
			setTimeout(async () => {
				if (arteFile != null && arteFile.length > 0) {
					const { data } = await supabase.storage
						.from("artes")
						.upload(
							arteFile[0]?.name ? arteFile[0]?.name : "",
							arteFile[0]
						);

					const { data: file } = await storage
						.from("objects")
						.select("id")
						.eq("name", arteFile[0].name)
						.single();
					resto.arte = file?.id;
				}

				const { data, error } = await supabase
					.from("atividades")
					.insert(resto)
					.select();

				const { data: Atividades } = await supabase
					.from("vw_atividade")
					.select("*");

				if (Atividades) {
					setAtividadesFiltradas(Atividades);
					setAtividades(Atividades);
				}

				toast({
					title: "Atividade incluída",
					status: "success",
					duration: 3000,
					position: "top-right",
					isClosable: true,
				});
				props.onClose();

				resolve();
			}, 3000);
		});
	}

	const tipoAtividadeWatch = watch("tipoAtividade");

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ModalBody>
				<Grid
					templateColumns="repeat(2, 1fr)"
					gap={6}
					justifyContent={"space-between"}
					mb={5}
				>
					<GridItem>
						<FormControl
							isInvalid={errors.tipoAtividade ? true : false}
						>
							<FormLabel htmlFor="tipoAtividade">
								Tipo da programação
							</FormLabel>
							<Select
								id="tipoAtividade"
								variant="flushed"
								placeholder="Selecione..."
								{...register("tipoAtividade", {
									required: "Preenhca o tipo da programação",
								})}
							>
								{TipoAtividades?.map((tipo) => (
									<option value={tipo.cod} key={tipo.cod}>
										{tipo.atividade}
									</option>
								))}
							</Select>
							<FormErrorMessage>
								<span>
									{errors.tipoAtividade?.message?.toString()}
								</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					{tipoAtividadeWatch == 1 && (
						<GridItem>
							<FormControl
								isInvalid={errors.santaCeia ? true : false}
							>
								<FormLabel htmlFor="santaCeia">
									Santa Ceia?
								</FormLabel>
								<Switch
									id="santaCeia"
									size={"md"}
									variant="flushed"
									placeholder="Santa Ceia"
									{...register("santaCeia", {
										required: "informe se é santa ceia",
									})}
								/>
								<FormErrorMessage>
									<span>
										{errors.santaCeia?.message?.toString()}
									</span>
								</FormErrorMessage>
							</FormControl>
						</GridItem>
					)}
					<GridItem>
						<FormControl
							isInvalid={errors.descricao ? true : false}
						>
							<FormLabel htmlFor="descricao">Descrição</FormLabel>
							<Input
								id="descricao"
								variant="flushed"
								placeholder="Descrição"
								{...register("descricao", {
									required: "Preenhca uma descrição",
								})}
							/>
							<FormErrorMessage>
								<span>
									{errors.descricao?.message?.toString()}
								</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<FormControl isInvalid={errors.dataHora ? true : false}>
							<FormLabel htmlFor="dataHora">
								Data e Hora
							</FormLabel>
							<Input
								id="dataHora"
								variant="flushed"
								type="datetime-local"
								placeholder="Data e Hora"
								{...register("dataHora", {
									required: "Preenhca uma data e horário",
									valueAsDate: true,
									onChange: (e) =>
										ValidaConflitoProgramacoes(
											e.target.value
										),
									onBlur: (e) => {
										ValidaConflitoProgramacoes(
											e.target.value
										);
									},
								})}
							/>
							<FormErrorMessage>
								<span>
									{errors.dataHora?.message?.toString()}
								</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<FormControl isInvalid={errors.local ? true : false}>
							<FormLabel htmlFor="local">Local</FormLabel>
							<Input
								id="local"
								variant="flushed"
								placeholder="Local"
								{...register("local", {
									required: "Preenhca o local",
								})}
							/>
							<FormErrorMessage>
								<span>{errors.local?.message?.toString()}</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<FormControl isInvalid={errors.preletor ? true : false}>
							<FormLabel htmlFor="preletor">Preletor</FormLabel>
							<Input
								id="preletor"
								variant="flushed"
								placeholder="Preletor"
								{...register("preletor", {
									required: "Preenhca o preletor",
								})}
							/>
							<FormErrorMessage>
								<span>
									{errors.preletor?.message?.toString()}
								</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<FormControl isInvalid={errors.banda ? true : false}>
							<FormLabel htmlFor="banda">Banda</FormLabel>
							<Input
								id="banda"
								variant="flushed"
								placeholder="Banda"
								{...register("banda", {
									required: "Preenhca o banda",
								})}
							/>
							<FormErrorMessage>
								<span>{errors.banda?.message?.toString()}</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<FormControl
							isInvalid={errors.sociedadeInterna ? true : false}
						>
							<FormLabel htmlFor="sociedadeInterna">
								Sociedade Interna
							</FormLabel>
							<Select
								id="sociedadeInterna"
								variant="flushed"
								placeholder="Selecione..."
								{...register("sociedadeInterna", {
									required: "Preenhca o sociedadeInterna",
								})}
							>
								{tags.map((sigla) => (
									<option
										value={sigla.sigla}
										key={sigla.sigla}
									>
										{sigla.sigla}
									</option>
								))}
							</Select>
							<FormErrorMessage>
								<span>
									{errors.sociedadeInterna?.message?.toString()}
								</span>
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<FormControl>
							<FormLabel htmlFor="arteFile">
								Arte de divulgação
							</FormLabel>
							<Input
								id="arteFile"
								type={"file"}
								variant="flushed"
								placeholder="clique ou arraste a arte de divulgação aqui"
								{...register("arteFile", {})}
							/>
							<FormErrorMessage></FormErrorMessage>
						</FormControl>
					</GridItem>
				</Grid>
				{cards.length >= 1 && (
					<VStack>
						<Text as={"cite"} color="tomato">
							{" "}
							Existem as seguintes programações na data inserida:
						</Text>
						{cards}
					</VStack>
				)}
			</ModalBody>
			<ModalFooter>
				<Button
					type="submit"
					isLoading={isSubmitting}
					m={"30px 0"}
					colorScheme="blue"
					mr={3}
				>
					Salvar
				</Button>
				<Button onClick={() => props.onClose()}>Fechar</Button>
			</ModalFooter>
		</form>
	);
}
