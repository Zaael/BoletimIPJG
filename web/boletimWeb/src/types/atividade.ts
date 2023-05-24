import { Session } from "@supabase/supabase-js";
import { Database } from "./supabase";

export type atividade = Database['public']['Tables']['atividades']['Row'];

export type sociedadeInterna = Database['public']['Tables']['sociedadeInterna']['Row'];

export type tipoAtividade = Database['public']['Tables']['tipoAtividade']['Row'];

export type filtroAtividade = { filtroTexto: string, isTag: boolean };

export type session = { session: Session | null};