import { ReactNode, createContext, useState, Dispatch, Reducer } from "react";
import { atividade, } from "../types/atividade";
import { Atividades, } from "../SupaBaseConnectionAPI";
import { useImmerReducer } from "use-immer";


const listaAtividades = Atividades ? Atividades : [];
const listaAtividadesVazia: atividade[] = [];
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
    setAtividadesFiltradas: (newState: atividade[]) => void;
    filtrarAtividades: (filtro: string) => void;
    filtrarAtividadesTag: (filtro: string) => void;
    tagsSelecionadas: {
        ativo: boolean,
        sigla: string
    }[];
    dispatchTags: Dispatch<{
        type: string,
        ativo: boolean,
        sigla: string
    }>;
}

const valorInicial = {
    atividades: listaAtividades,
    setAtividades: () => { },
    setAtividadesFiltradas: () => { },
    filtrarAtividades: () => { },
    filtrarAtividadesTag: () => { },
    tagsSelecionadas: tagsSelecionadasInicial,
    dispatchTags: () => { },
}

export const AtividadeContext = createContext<AtividadeContextType>(valorInicial);

export const AtividadeContextProvider = ({ children }: AtividadeContextProps) => {
    const [atividades, setAtividades] = useState(valorInicial.atividades);
    const [atividadesFiltradas, setAtividadesFiltrada] = useState(atividades);
    const [filtro, setFiltroInput] = useState("");

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
                    return draft.filter((tag) => tag.sigla === action.sigla);
                default:
                    break;
            }
        }, tagsSelecionadasInicial
    );

    const filtrarAtividades = async (filtro: string) => {
        var listaFiltrada = filtro.length >= 1 ? atividades
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

    let filtroTags = (atividade: atividade) => tagsSelecionadas.forEach((tag) => atividade.sociedadeInterna?.match(tag.sigla));
    let filtroInput = (atividade: atividade) => atividade.descricao.toString().toLowerCase().includes(filtro.toLowerCase());

    console.log(tagsSelecionadas);

    return (
        <AtividadeContext.Provider value={{ atividades: atividadesFiltradas, setAtividades, filtrarAtividades, filtrarAtividadesTag, setAtividadesFiltradas: setAtividadesFiltrada, tagsSelecionadas, dispatchTags: dispatch }}>
            {children}
        </AtividadeContext.Provider>
    )
}

function TagselecionadasReducer(draft: { ativo: boolean, sigla: string }[], action: { type: string, ativo: boolean, sigla: string }) {
    switch (action.type) {
        case "ativo":
            draft.push({
                ativo: action.ativo,
                sigla: action.sigla
            });
            break;
        case "inativo":
            return draft.filter((tag) => tag.sigla === action.sigla);
        default:
            break;
    }
}