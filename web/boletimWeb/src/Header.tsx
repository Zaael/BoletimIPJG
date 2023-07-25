import {
	Flex,
	Image,
	useColorMode,
	Avatar,
	Spacer,
	IconButton,
	LinkBox,
	LinkOverlay,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LogIn, LogOut } from "./Login";
import { Perfil, sessaoLogada } from "./SupaBaseConnectionAPI";

export function Cabecalho() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<Flex margin={3}>
			<LogoIgreja></LogoIgreja>
			<Spacer></Spacer>
			<IconButton
				aria-label="toggle theme"
				rounded="full"
				size="sm"
				onClick={toggleColorMode}
				marginRight={"2"}
				icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
			/>
			{sessaoLogada.session != null && <AvatarLogin></AvatarLogin>}
			<AreaLogin></AreaLogin>
		</Flex>
	);
}

export function LogoIgreja() {
	const { toggleColorMode, colorMode } = useColorMode();
	var navigate = useNavigate();
	function Home() {
		navigate("/");
	}
	return (
		<LinkBox>
			<Image
				objectFit="contain"
				src={
					colorMode === "dark"
						? "./LogoBoletimIPJGBranco.png"
						: "./LogoBoletimIPJGAzul.png"
				}
				alt="Logo IPJG"
				w={["16", "24", "36"]}
			></Image>
			<LinkOverlay onClick={Home}></LinkOverlay>
		</LinkBox>
	);
}

function AreaLogin() {
	var sessao = sessaoLogada.session;
	let logado;
	if (sessao != null) {
		logado = <LogOut></LogOut>;
	} else {
		logado = <LogIn></LogIn>;
	}
	return logado;
}

function AvatarLogin() {
	return (
		<Avatar
			name="avatarProfile"
			size="sm"
			marginRight={"2"}
			src={Perfil != null ? Perfil[0]?.avatar?.toString() : ""}
		/>
		// <Tag size="lg" colorScheme="green" borderRadius="full" variant="subtle">
		// 	{/* <TagLabel>
		// 		{Perfil != null
		// 			? Perfil[0]?.nome?.split(" ")[0].toString()
		// 			: ""}{" "}
		// 	</TagLabel> */}
		// </Tag>
	);
}
