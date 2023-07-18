export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      atividades: {
        Row: {
          arte: string | null
          banda: string | null
          created_at: string | null
          dataHora: string
          descricao: string
          id: number
          local: string | null
          preletor: string | null
          santaCeia: boolean | null
          sociedadeInterna: string | null
          tipoAtividade: number | null
        }
        Insert: {
          arte?: string | null
          banda?: string | null
          created_at?: string | null
          dataHora: string
          descricao: string
          id?: number
          local?: string | null
          preletor?: string | null
          santaCeia?: boolean | null
          sociedadeInterna?: string | null
          tipoAtividade?: number | null
        }
        Update: {
          arte?: string | null
          banda?: string | null
          created_at?: string | null
          dataHora?: string
          descricao?: string
          id?: number
          local?: string | null
          preletor?: string | null
          santaCeia?: boolean | null
          sociedadeInterna?: string | null
          tipoAtividade?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "atividades_arte_fkey"
            columns: ["arte"]
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "atividades_sociedadeInterna_fkey"
            columns: ["sociedadeInterna"]
            referencedRelation: "sociedadeInterna"
            referencedColumns: ["sigla"]
          },
          {
            foreignKeyName: "atividades_tipoAtividade_fkey"
            columns: ["tipoAtividade"]
            referencedRelation: "tipoAtividade"
            referencedColumns: ["cod"]
          }
        ]
      }
      diretoriaMembros: {
        Row: {
          created_at: string | null
          diretoria: number | null
          funcao: number | null
          id: number
          membro: string | null
        }
        Insert: {
          created_at?: string | null
          diretoria?: number | null
          funcao?: number | null
          id?: number
          membro?: string | null
        }
        Update: {
          created_at?: string | null
          diretoria?: number | null
          funcao?: number | null
          id?: number
          membro?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diretoriaMembros_diretoria_fkey"
            columns: ["diretoria"]
            referencedRelation: "diretorias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diretoriaMembros_funcao_fkey"
            columns: ["funcao"]
            referencedRelation: "tipoFuncao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diretoriaMembros_membro_fkey"
            columns: ["membro"]
            referencedRelation: "perfis"
            referencedColumns: ["id"]
          }
        ]
      }
      diretorias: {
        Row: {
          anoVigencia: number
          created_at: string | null
          id: number
          sociedadeInterna: string
        }
        Insert: {
          anoVigencia: number
          created_at?: string | null
          id?: number
          sociedadeInterna: string
        }
        Update: {
          anoVigencia?: number
          created_at?: string | null
          id?: number
          sociedadeInterna?: string
        }
        Relationships: [
          {
            foreignKeyName: "diretorias_sociedadeInterna_fkey"
            columns: ["sociedadeInterna"]
            referencedRelation: "sociedadeInterna"
            referencedColumns: ["sigla"]
          }
        ]
      }
      perfis: {
        Row: {
          aniversario: string | null
          avatar: string | null
          created_at: string | null
          id: string
          nome: string | null
        }
        Insert: {
          aniversario?: string | null
          avatar?: string | null
          created_at?: string | null
          id: string
          nome?: string | null
        }
        Update: {
          aniversario?: string | null
          avatar?: string | null
          created_at?: string | null
          id?: string
          nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "perfis_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sociedadeInterna: {
        Row: {
          cor: string | null
          created_at: string | null
          fundacao: string | null
          id: number
          logo: string | null
          sigla: string
        }
        Insert: {
          cor?: string | null
          created_at?: string | null
          fundacao?: string | null
          id?: number
          logo?: string | null
          sigla: string
        }
        Update: {
          cor?: string | null
          created_at?: string | null
          fundacao?: string | null
          id?: number
          logo?: string | null
          sigla?: string
        }
        Relationships: []
      }
      tipoAtividade: {
        Row: {
          atividade: string
          cod: number
          created_at: string | null
          id: number
        }
        Insert: {
          atividade: string
          cod: number
          created_at?: string | null
          id?: number
        }
        Update: {
          atividade?: string
          cod?: number
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      tipoFuncao: {
        Row: {
          created_at: string | null
          descricao: string
          id: number
          tipoFuncao: number
        }
        Insert: {
          created_at?: string | null
          descricao: string
          id?: number
          tipoFuncao: number
        }
        Update: {
          created_at?: string | null
          descricao?: string
          id?: number
          tipoFuncao?: number
        }
        Relationships: []
      }
    }
    Views: {
      vw_atividade: {
        Row: {
          arte: string | null
          atividade: string | null
          banda: string | null
          created_at: string | null
          dataHora: string | null
          descricao: string | null
          id: number | null
          local: string | null
          preletor: string | null
          santaCeia: boolean | null
          sociedadeInterna: string | null
        }
        Relationships: [
          {
            foreignKeyName: "atividades_sociedadeInterna_fkey"
            columns: ["sociedadeInterna"]
            referencedRelation: "sociedadeInterna"
            referencedColumns: ["sigla"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
