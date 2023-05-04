import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { atividade } from './types/atividade'
import { Database } from './types/supabase'

const supabaseUrl = 'https://zlgefsrnumtlfugftpyf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZ2Vmc3JudW10bGZ1Z2Z0cHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxMzcxNzEsImV4cCI6MTk5ODcxMzE3MX0.0Denn0lM1Pk689Jl6kDkkDAQ393DxmVzmyoNGY55L30"
const supabase = createClient<Database>(supabaseUrl, supabaseKey)

function GetDadosRepo(){
    const dados: { [x: string]: any }[] = [];
    useEffect(()=> {
      async function carregaDados() {
        const { data, error } = await supabase
        .from('atividades')
        .select('*');

        data?.map((atividade) => {
            dados.push(atividade);
        })
        return dados;
      }
      carregaDados();
    }, []);
  }

export {supabase};