export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      atividades: {
        Row: {
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
      }
    }
    Views: {
      [_ in never]: never
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
