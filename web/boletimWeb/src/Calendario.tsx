import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, useDisclosure, VStack } from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { AtividadeContextProvider } from "./contexts/ListaAtividadesContext";
import { ModalNovaAtividade } from "./NovaAtividade";
import { PesquisaAtividade } from "./PesquisaAtividade";
import { supabase } from "./SupaBaseConnectionAPI";

export default function Calendario() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [usuarioLogado, setUsuarioLogado] = useState<User | null>();
	const [podeCriarProgramacao, setPodeCriarProgramacao] = useState(Boolean);

	useEffect(() => {
		getUserSession();
	}, []);

	async function getUserSession() {
		const { data: user, error } = await supabase.auth.getUser();

		if (user != null) {
			var userId = user.user?.id ? user.user?.id.toString() : "";

			let { data, error } = await supabase.rpc("validate_auth_id", {
				id_parameter: userId,
			});

			if (data != null) {
				setPodeCriarProgramacao(data);
			}
		}

		setUsuarioLogado(user.user);
	}

	return (
		<Flex direction={"column"}>
			<AtividadeContextProvider>
				<PesquisaAtividade></PesquisaAtividade>
				{usuarioLogado != null && podeCriarProgramacao && (
					<Button
						onClick={onOpen}
						alignSelf={"end"}
						leftIcon={<AddIcon />}
						colorScheme="green"
						size={["xs", "sm"]}
						marginTop={"2"}
					>
						Nova programação
					</Button>
				)}
				<ModalNovaAtividade
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
				></ModalNovaAtividade>
			</AtividadeContextProvider>
		</Flex>
	);
}
