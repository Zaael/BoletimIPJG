import { ReactNode, createContext, useState } from "react";
import { sociedadeInterna } from "../types/atividade";
import { Tags } from "../SupaBaseConnectionAPI";

type SociedadeInternaContextProps = {
    children:  ReactNode
}

type SociedadeInternaContextType = {    
    tags: sociedadeInterna[];
    setTags:(newState: sociedadeInterna[]) => void;   
}

const listaTags = Tags? Tags: [];
const valorInicial = {    
    tags: listaTags,
    setTags: () => {}
}

export const SociedadeInternaContext = createContext<SociedadeInternaContextType>(valorInicial);

export const SociedadeInternaContextProvider = ({children} : SociedadeInternaContextProps) => {
    const [tags, setTags] = useState(valorInicial.tags);
    return(
        <SociedadeInternaContext.Provider value={{tags, setTags}}>
        </SociedadeInternaContext.Provider>
    )
}