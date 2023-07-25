import { Box } from "@chakra-ui/react";
import { Cabecalho } from "./Header";
import { MenuTabs } from "./Menu";
import { ToPolicy } from "./page/politicaPrivacidade";

function App() {
	return (
		<Box
			marginLeft={"auto"}
			marginRight={"auto"}
			marginTop="2"
			width={["sm", "container.md", "container.lg"]}
			alignItems={"center"}
		>
			<Cabecalho></Cabecalho>
			<MenuTabs></MenuTabs>
			<ToPolicy></ToPolicy>
		</Box>
	);
}
export default App;
