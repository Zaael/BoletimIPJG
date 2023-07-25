import { Session } from "@supabase/supabase-js";
import { Database } from "./supabase";

export type atividade = Database['public']['Tables']['atividades']['Row'];

export type vw_atividade = Database['public']['Views']['vw_atividade']['Row'];

export type sociedadeInterna = Database['public']['Tables']['sociedadeInterna']['Row'];

export type tipoAtividade = Database['public']['Tables']['tipoAtividade']['Row'];

export type perfil = Database['public']['Tables']['perfis']['Row'];

export type filtroAtividade = { filtroTexto: string, isTag: boolean };

export type session = { session: Session | null };

export interface atividadeInsert  {
    banda: string | null
    arte: string | undefined
    created_at: string | null
    dataHora: string
    descricao: string
    id: number
    local: string | null
    preletor: string | null
    santaCeia: boolean | null
    sociedadeInterna: string | null
    tipoAtividade: number | null
    arteFile: FileList
}