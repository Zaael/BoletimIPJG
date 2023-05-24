import { Button } from "@chakra-ui/react";
import { Auth } from "@supabase/auth-ui-react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { signInWithGoogle, signout, supabase } from "./SupaBaseConnectionAPI";
import { session } from "./types/atividade";


const sessionInicial: session | null = null

export function Login() {
    const [session, setSession] = useState(sessionInicial)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (<Auth supabaseClient={supabase} />)
    }
    else {
        return (<div>Logged in!</div>)
    }

    return (
        <Button
            leftIcon={<FaGoogle></FaGoogle>}
            colorScheme="green"
            size={"md"}
            onClick={signInWithGoogle}
        >
            Login
        </Button>
    )
}

export function LogOut() {
    return (
        <Button
            leftIcon={<FaGoogle></FaGoogle>}
            colorScheme="green"
            size={"md"}
            onClick={signout}
        >
            Login
        </Button>
    )
}