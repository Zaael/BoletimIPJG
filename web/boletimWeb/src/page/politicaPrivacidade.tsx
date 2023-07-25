import { Box, Container, Heading, IconButton, Text } from "@chakra-ui/react";
import { IoMdPaper } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "../Header";
export function Politica() {
	return (
		<Box
			marginLeft={"auto"}
			marginRight={"auto"}
			marginTop="2"
			width={["sm", "container.md", "container.lg"]}
			alignItems={"center"}
		>
			<Cabecalho></Cabecalho>
			<Heading as="h2" size="xl" margin={2}>
				Política Privacidade
			</Heading>
			<Text marginBottom={2}>
				A sua privacidade é importante para nós. É política do Boletim
				IPJG respeitar a sua privacidade em relação a qualquer
				informação sua que possamos coletar no site{" "}
				<a href="https://boletim-ipjg.vercel.app/">Boletim IPJG</a>, e
				outros sites que possuímos e operamos.
			</Text>
			<Text marginBottom={2}>
				{" "}
				Solicitamos informações pessoais apenas quando realmente
				precisamos delas para lhe fornecer um serviço. Fazemo-lo por
				meios justos e legais, com o seu conhecimento e consentimento.
				Também informamos por que estamos coletando e como será usado.
			</Text>
			<Text marginBottom={2}>
				Apenas retemos as informações coletadas pelo tempo necessário
				para fornecer o serviço solicitado. Quando armazenamos dados,
				protegemos dentro de meios comercialmente aceitáveis ​​para
				evitar perdas e roubos, bem como acesso, Containerulgação,
				cópia, uso ou modificação não autorizados.
			</Text>
			<Text marginBottom={2}>
				Não compartilhamos informações de identificação pessoal
				publicamente ou com terceiros, exceto quando exigido por lei.
			</Text>
			<Text marginBottom={2}>
				O nosso site pode ter links para sites externos que não são
				operados por nós. Esteja ciente de que não temos controle sobre
				o conteúdo e práticas desses sites e não podemos aceitar
				responsabilidade por suas respectivas&nbsp;
			</Text>
			<a
				href="https://politicaprivacidade.com/"
				rel="noopener noreferrer"
				target="_blank"
			>
				políticas de privacidade.
			</a>
			<Text marginBottom={2}>
				Você é livre para recusar a nossa solicitação de informações
				pessoais, entendendo que talvez não possamos fornecer alguns dos
				serviços desejados.
			</Text>
			<Text marginBottom={2}>
				O uso continuado de nosso site será considerado como aceitação
				de nossas práticas em torno de privacidade e informações
				pessoais. Se você tiver alguma dúvida sobre como lidamos com
				dados do usuário e informações pessoais, entre em contacto
				connosco.
			</Text>
			<Text marginBottom={2}>
				<ul>
					<li>
						<Text marginBottom={2}>
							O serviço Google AdSense que usamos para veicular
							publicidade usa um cookie DoubleClick para veicular
							anúncios mais relevantes em toda a Web e limitar o
							número de vezes que um determinado anúncio é exibido
							para você.
						</Text>
					</li>
					<li>
						<Text marginBottom={2}>
							Para mais informações sobre o Google AdSense,
							consulte as FAQs oficiais sobre privacidade do
							Google AdSense.
						</Text>
					</li>
					<li>
						<Text marginBottom={2}>
							Utilizamos anúncios para compensar os custos de
							funcionamento deste site e fornecer financiamento
							para futuros desenvolvimentos. Os cookies de
							publicidade comportamental usados ​​por este site
							foram projetados para garantir que você forneça os
							anúncios mais relevantes sempre que possível,
							rastreando anonimamente seus interesses e
							apresentando coisas semelhantes que possam ser do
							seu interesse.
						</Text>
					</li>
					<li>
						<Text marginBottom={4}>
							Vários parceiros anunciam em nosso nome e os cookies
							de rastreamento de afiliados simplesmente nos
							permitem ver se nossos clientes acessaram o site
							através de um dos sites de nossos parceiros, para
							que possamos creditá-los adequadamente e, quando
							aplicável, permitir que nossos parceiros afiliados
							ofereçam qualquer promoção que pode fornecê-lo para
							fazer uma compra.
						</Text>
					</li>
				</ul>
			</Text>
			<Heading as="h3" size="md">
				Compromisso do Usuário
			</Heading>
			<Text marginBottom={2}>
				O usuário se compromete a fazer uso adequado dos conteúdos e da
				informação que o Boletim IPJG oferece no site e com caráter
				enunciativo, mas não limitativo:
			</Text>
			<ul>
				<li>
					<Text marginBottom={2}>
						{" "}
						A) Não se envolver em atividades que sejam ilegais ou
						contrárias à boa fé a à ordem pública;
					</Text>
				</li>
				<li>
					<Text marginBottom={2}>
						{" "}
						B) Não difundir propaganda ou conteúdo de natureza
						racista, xenofóbica, jogos de sorte ou azar, qualquer
						tipo de pornografia ilegal, de apologia ao terrorismo ou
						contra os direitos humanos;
					</Text>
				</li>
				<li>
					<Text marginBottom={2}>
						{" "}
						C) Não causar danos aos sistemas físicos (hardwares) e
						lógicos (softwares) do Boletim IPJG, de seus
						fornecedores ou terceiros, para introduzir ou disseminar
						vírus informáticos ou quaisquer outros sistemas de
						hardware ou software que sejam capazes de causar danos
						anteriormente mencionados.
					</Text>
				</li>
			</ul>
			<h3>
				<Text marginBottom={2}>Mais informações</Text>
			</h3>
			<Text marginBottom={2}>
				Esperemos que esteja esclarecido e, como mencionado
				anteriormente, se houver algo que você não tem certeza se
				precisa ou não, geralmente é mais seguro deixar os cookies
				ativados, caso interaja com um dos recursos que você usa em
				nosso site.
			</Text>
			<Text marginBottom={2}>
				Esta política é efetiva a partir de&nbsp;25 de Julho de 2023,
				15:24
			</Text>
		</Box>
	);
}

export function ToPolicy() {
	var navigate = useNavigate();
	function Logar() {
		navigate("/politicaprivacidade");
	}

	return (
		<IconButton
			aria-label="login"
			icon={<IoMdPaper />}
			onClick={Logar}
			size={"xs"}
		></IconButton>
	);
}
