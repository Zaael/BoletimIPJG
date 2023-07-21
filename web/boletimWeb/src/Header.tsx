import {
	Flex,
	Image,
	useColorMode,
	Avatar,
	Spacer,
	IconButton,
	Tag,
	TagLabel,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { LogIn, LogOut } from "./Login";
import { Perfil, sessaoLogada } from "./SupaBaseConnectionAPI";

export function Cabecalho() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<Flex marginBottom={1} marginLeft={1}>
			<LogoIgreja></LogoIgreja>
			<Spacer></Spacer>
			<IconButton
				aria-label="toggle theme"
				rounded="full"
				size="sm"
				onClick={toggleColorMode}
                marginRight={'2'}
				icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
			/>
            {sessaoLogada.session != null &&
			    <AvatarLogin></AvatarLogin>
            }
			<AreaLogin></AreaLogin>
		</Flex>
	);
}

export function LogoIgreja() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
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
                marginRight={'2'}
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
