import { ReactNode, createContext, useState } from "react";
import { atividade, } from "../types/atividade";
import { Atividades, } from "../SupaBaseConnectionAPI";


const listaAtividades = Atividades? Atividades: [];

type AtividadeContextProps = {
    children:  ReactNode
}

type AtividadeContextType = {
    atividades: atividade[];
    setAtividades: (newState: atividade[]) => void ;
    filtrarAtividades: (filtro: string, isTag: boolean ) => void; 
}

const valorInicial = {
    atividades: listaAtividades,
    setAtividades: () => {},
    filtrarAtividades: () => {}
}

export const AtividadeContext = createContext<AtividadeContextType>(valorInicial);

export const AtividadeContextProvider = ({children} : AtividadeContextProps) => {
    const [atividades, setAtividades] = useState(valorInicial.atividades);
    const [atividadesFiltradas, setAtividadesFiltrada] = useState(atividades);
    const [atividadesFiltradasTag, setAtividadesFiltradaTag] = useState(atividades);

    const filtrarAtividades = async (filtro: string) => {
        var listaFiltrada = filtro.length > 1 ? atividades
            .filter(element =>
                //element.sociedadeInterna?.toString().toLowerCase().match(filtro.toLowerCase())
                element.descricao.toString().toLowerCase().includes(filtro.toLowerCase())
            ) : atividades
        setAtividadesFiltrada(
            listaFiltrada
        );
    }    

    return (        
        <AtividadeContext.Provider value={{atividades: atividadesFiltradas, setAtividades, filtrarAtividades}}>
            {children}
        </AtividadeContext.Provider>
    )
}