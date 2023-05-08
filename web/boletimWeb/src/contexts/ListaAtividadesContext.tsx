import { Children, ReactNode, createContext, useState } from "react";
import { atividade } from "../types/atividade";

const lista: atividade[] = [];

type AtividadeContextProps = {
    children:  ReactNode
}

type AtividadeContextType = {
    atividades: atividade[];
    setAtividades: (newState: atividade[]) => void ;
}

const valorInicial = {
    atividades: lista,
    setAtividades: () => {},
}

export const AtividadeContext = createContext<AtividadeContextType>(valorInicial);

export const AtividadeContextProvider = ({children} : AtividadeContextProps) => {
    const [atividades, setAtividades] = useState(valorInicial.atividades);

    return (
        <AtividadeContext.Provider value={{atividades, setAtividades}}>
            {children}
        </AtividadeContext.Provider>
    )
}