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

