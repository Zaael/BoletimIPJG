import {
	Box,
	Card,
	CardBody,
	Text,
	Stack,
	Flex,
	Spacer,
	Wrap,
	Divider,
	CardHeader,
	CardFooter,
	Heading,
} from "@chakra-ui/react";
import moment from "moment";
import { CardAtividadeItem } from "./CardAtividadeItem";
import { CardAtividadeButtons } from "./CardAtividadeButtons";
import { useContext } from "react";
import { AtividadeContext } from "./contexts/ListaAtividadesContext";
import { LogoSociedadeInterna } from "./Marca";
import { vw_atividade } from "./types/atividade";

export function CardAtividade() {
	ConfiguraMomentJs();
	const { atividadesFiltradas } = useContext(AtividadeContext);
	const cards = CardItem(atividadesFiltradas, "sm");

	return (
		<Box overflow={"auto"} marginLeft={"auto"} marginRight={"auto"}>
			{cards}
		</Box>
	);
}

export function CardItem(atividades: vw_atividade[], size: string) {
	const cards = atividades.map((atividade) => (
		<Box w={[300, 300, 400]} key={atividade.id}>
			<Card
				overflow="hidden"
				variant="outline"
				m={"1.5"}
				size={size}
				borderColor={atividade.sociedadeInterna
					?.toLowerCase()
					.concat(".500")}
			>
				<CardHeader>
					<Flex alignItems="center">
						<LogoSociedadeInterna
							sigla={
								atividade.sociedadeInterna
									? atividade.sociedadeInterna
									: ""
							}
						></LogoSociedadeInterna>
						<Box w="100%" p={4}>
							<Heading size="sm">
								{atividade.descricao}{" "}
								{atividade.santaCeia ? (
									<Text as="b"> - Santa Ceia</Text>
								) : (
									""
								)}
							</Heading>
							<Flex>
								<Text fontSize="sm">
									{moment(atividade.dataHora).format("DD") +
										"/" +
										moment(atividade.dataHora).format(
											"MM"
										) +
										" - " +
										moment(atividade.dataHora).format(
											"dddd"
										)}
								</Text>
								<Spacer />
								<Text fontSize="sm">
									{moment(atividade.dataHora).format("HH:mm")}
								</Text>
							</Flex>
						</Box>
					</Flex>
					<Divider></Divider>
				</CardHeader>
				<CardBody mb={0} pb={-1} pt={-1}>
					<Wrap spacing={"1rem"} justifyContent={"space-between"}>
						{atividade.local ? (
							<CardAtividadeItem
								Item={atividade.local}
								Tipo="Local"
							></CardAtividadeItem>
						) : (
							""
						)}
						{atividade.preletor ? (
							<CardAtividadeItem
								Item={atividade.preletor}
								Tipo="Preletor"
							></CardAtividadeItem>
						) : (
							""
						)}
						{atividade.banda ? (
							<CardAtividadeItem
								Item={atividade.banda}
								Tipo="Banda"
							></CardAtividadeItem>
						) : (
							""
						)}
					</Wrap>
				</CardBody>
				<CardFooter justify="space-between" flexWrap="wrap" pt={0}>
					<CardAtividadeButtons
						arte={atividade.arte}
					></CardAtividadeButtons>
				</CardFooter>
			</Card>
		</Box>
	));

	return cards;
}

function ConfiguraMomentJs() {
	moment.locale("pt-br");
	moment.updateLocale("en", {
		monthsShort: [
			"Jan",
			"Feb",
			"Mar",
			"Abr",
			"Mai",
			"Jun",
			"Jul",
			"Ago",
			"Set",
			"Out",
			"Nov",
			"Dez",
		],
		weekdays: [
			"Domingo",
			"Segunda-Feira",
			"Terça-Feira",
			"Quarta-Feira",
			"Quinta-Feira",
			"Sexta-Feira",
			"Sábado",
		],
	});
}
// .color1 { #046dd8 };
// .color2 { #2a85e2 };
// .color3 { #4f9cec };
// .color4 { #75b4f5 };
// .color5 { #9acbff };
