import { ReactNode, createContext, useState, Dispatch, Reducer, useEffect } from "react";
import { atividade, } from "../types/atividade";
import { Atividades, } from "../SupaBaseConnectionAPI";
import { useImmerReducer } from "use-immer";


const listaAtividades = Atividades ? Atividades : [];
const tagsSelecionadasInicial: {
    ativo: boolean,
    sigla: string
}[] = [];

type AtividadeContextProps = {
    children: ReactNode
}

type AtividadeContextType = {
    atividades: atividade[];
    setAtividades: (newState: atividade[]) => void;
    atividadesFiltradas: atividade[];
    setAtividadesFiltradas: (newState: atividade[]) => void;
    filtrarAtividades: () => void;
    tagsSelecionadas: {
        ativo: boolean,
        sigla: string
    }[];
    dispatchTags: Dispatch<{
        type: string,
        ativo: boolean,
        sigla: string
    }>;
    filtro: string;
    setFiltro: (newFiltro: string) => void;
    filtroData: string;
    setFiltroData: (filtroData: string) => void;
}

const valorInicial = {
    atividades: listaAtividades,
    setAtividades: () => { },
    atividadesFiltradas: listaAtividades,
    setAtividadesFiltradas: () => { },
    filtrarAtividades: () => { },
    tagsSelecionadas: tagsSelecionadasInicial,
    dispatchTags: () => { },
    filtro: "",
    setFiltro: () => { },
    filtroData: "",
    setFiltroData: () => { },
}

export const AtividadeContext = createContext<AtividadeContextType>(valorInicial);

export const AtividadeContextProvider = ({ children }: AtividadeContextProps) => {
    const [atividades, setAtividades] = useState(valorInicial.atividades);
    const [atividadesFiltradas, setAtividadesFiltradas] = useState(atividades);
    const [filtro, setFiltroInput] = useState(valorInicial.filtro);
    const [filtroData, setFiltroData] = useState(valorInicial.filtroData);

    const [tagsSelecionadas, dispatch] = useImmerReducer(
        (draft, action: { type: string, ativo: boolean, sigla: string }) => {
            switch (action.type) {
                case "ativo":
                    draft.push({
                        ativo: action.ativo,
                        sigla: action.sigla
                    });
                    break;
                case "inativo":
                    return draft.filter((tag) => tag.sigla !== action.sigla);
                default:
                    break;
            }
        }, tagsSelecionadasInicial
    );

    const filtrarAtividades = () => {
        var listaFiltrada =
            atividades
                .filter(filtroInput)
                .filter(filtroTags)
                .filter(filtroDatas);

        setAtividadesFiltradas(
            listaFiltrada
        );
    }

    let filtroInput = (atividade: atividade) => filtro.length >= 1 ? atividade.descricao.toString().toLowerCase().includes(filtro.toLowerCase()) : atividade;
    let filtroTags = (atividade: atividade) => tagsSelecionadas.length >= 1 ? tagsSelecionadas.find(tag => tag.sigla === atividade.sociedadeInterna) : atividade;
    let filtroDatas = (atividade: atividade) => filtroData.toLocaleString().length >= 1 ? atividade.dataHora.match(filtroData) : atividade;

    return (
        <AtividadeContext.Provider value={{ atividades: atividades, setAtividades, atividadesFiltradas, setAtividadesFiltradas: setAtividadesFiltradas, filtrarAtividades, tagsSelecionadas, dispatchTags: dispatch, filtro, setFiltro: setFiltroInput, filtroData, setFiltroData }}>
            {children}
        </AtividadeContext.Provider>
    )
}
