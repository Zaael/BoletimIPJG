import { Button, Container, IconButton, theme } from "@chakra-ui/react";
import { Auth } from "@supabase/auth-ui-react";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { signout, supabase } from "./SupaBaseConnectionAPI";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export function Login() {
	const [session, setSession] = useState<Session>();

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			session != null ? setSession(session) : setSession(undefined);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			session != null ? setSession(session) : setSession(undefined);
		});

		return () => subscription.unsubscribe();
	}, []);

	if (!session) {
		return (
			<Container
				maxW={"container.md"}
				p={"50"}
				m={"auto"}
				marginLeft={"auto"}
				marginRight={"auto"}
				w={"100%"}
				alignItems={"center"}
			>
				<Auth
					supabaseClient={supabase}
					socialLayout={"horizontal"}
					providers={["google"]}
					appearance={{ theme: ThemeSupa }}
				/>
			</Container>
		);
	} else {
		return <Navigate to="0" replace={true} />;
	}
}

export function LogOut() {
	var navigate = useNavigate();
	function deslogar() {
		signout().then(() => {
			navigate(0);
		});
	}
	return (
		<Button
			leftIcon={<IoIosLogOut />}
			onClick={deslogar}
			aria-label="logout"
			size="sm"
		>
			Deslogar
		</Button>
		// <IconButton aria-label="logout" icon={<IoIosLogOut />} onClick={deslogar}>
		// </IconButton>
	);
}

export function LogIn() {
	var navigate = useNavigate();
	function Logar() {
		navigate("/login");
	}

	return (
		<Button
			aria-label="login"
			leftIcon={<IoIosLogIn />}
			onClick={Logar}
			size="sm"
		>
			Login
		</Button>
		// <IconButton aria-label="login" icon={<IoIosLogIn />} onClick={Logar}>
		// </IconButton>
	);
}
