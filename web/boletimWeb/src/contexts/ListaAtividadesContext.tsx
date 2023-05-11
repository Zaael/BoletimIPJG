import { ReactNode, createContext, useState } from "react";
import { atividade, } from "../types/atividade";
import { Atividades, } from "../SupaBaseConnectionAPI";


const listaAtividades = Atividades ? Atividades : [];
const listaAtividadesVazia: atividade[] = [];

type AtividadeContextProps = {
    children: ReactNode
}

type AtividadeContextType = {
    atividades: atividade[];
    setAtividades: (newState: atividade[]) => void;
    setAtividadesFiltradas: (newState: atividade[]) => void;
    filtrarAtividades: (filtro: string) => void;
    filtrarAtividadesTag: (filtro: string) => void;
    // atividadesFiltradasTag: atividade[];
    // setAtividadesFiltradaTag: (newState: atividade[]) => void;
}

const valorInicial = {
    atividades: listaAtividades,
    setAtividades: () => { },
    setAtividadesFiltradas: () => { },
    filtrarAtividades: () => { },
    filtrarAtividadesTag: () => { },
    // atividadesFiltradasTag: listaAtividadesVazia,
    // setAtividadesFiltradaTag: () => { },
}

export const AtividadeContext = createContext<AtividadeContextType>(valorInicial);

export const AtividadeContextProvider = ({ children }: AtividadeContextProps) => {
    const [atividades, setAtividades] = useState(valorInicial.atividades);
    const [atividadesFiltradas, setAtividadesFiltrada] = useState(atividades);
    const [atividadesFiltradasTag, setAtividadesFiltradaTag] = useState(atividades);

    const filtrarAtividades = async (filtro: string) => {
        console.log(filtro);
        var listaFiltrada = atividadesFiltradas.length > 1 && filtro.length >= 1 ? atividadesFiltradas
            .filter(element =>
                //element.sociedadeInterna?.toString().toLowerCase().match(filtro.toLowerCase())
                element.descricao.toString().toLowerCase().includes(filtro.toLowerCase())
            ) : atividades
        setAtividadesFiltrada(
            listaFiltrada   
        );
    }

    const filtrarAtividadesTag = async (filtro: string) => {
        var listaFiltrada = atividadesFiltradas.length > 1 && filtro.length > 1 ? atividadesFiltradas
            .filter(element =>
                element.sociedadeInterna?.toString().toLowerCase().match(filtro.toLowerCase())
                //element.descricao.toString().toLowerCase().includes(filtro.toLowerCase())
            ) : atividades
        setAtividadesFiltrada(
            listaFiltrada
        );
    }

    return (
        <AtividadeContext.Provider value={{ atividades: atividadesFiltradas, setAtividades, filtrarAtividades, filtrarAtividadesTag, setAtividadesFiltradas: setAtividadesFiltrada }}>
            {children}
        </AtividadeContext.Provider>
    )
}