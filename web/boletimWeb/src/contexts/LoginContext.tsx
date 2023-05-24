import { createContext, ReactNode, useEffect, useState } from "react";
import { sessao, supabase } from "../SupaBaseConnectionAPI";
import { session } from "../types/atividade";



const sessionInicial: session = sessao ? { session: sessao.session } : { session: null };
type LoginContextProps = {
    children: ReactNode
}
type LoginContextType = {
    session: session;
}

const valorInicial = {
    session: sessionInicial
}


export const LoginContext = createContext<LoginContextType>(valorInicial);

export const LoginContextProvider = ({ children }: LoginContextProps) => {
    const [session, setSession] = useState(sessionInicial)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            //setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            //setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    // if (!session) {
    //     return (<Auth supabaseClient={supabase} />)
    // }
    // else {
    //     return (<div>Logged in!</div>)
    // }

    return (
        <LoginContext.Provider value={{ session }}>
            {children}
        </LoginContext.Provider>
    )
}




