import { createClient } from '@supabase/supabase-js'
import { Database } from './types/supabase'
import { useEffect } from 'react'
import { utc } from 'moment'
import moment from 'moment'

const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export { supabase, Atividades, Tags, TipoAtividades, signInWithGoogle, signout, sessao };

var now = Date.now();

const { data: Atividades } = await supabase
    .from("atividades")
    .select("*")
//.gte("dataHora",moment(now).format('YYYY-MM-DD HH:mm:ss'));


const { data: Tags } = await supabase
    .from("sociedadeInterna")
    .select("*");

const { data: TipoAtividades } = await supabase
    .from("tipoAtividade")
    .select("*");

async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })
}

async function signout() {
    const { error } = await supabase.auth.signOut()
}


const { data: sessao, error } = await supabase.auth.getSession()
