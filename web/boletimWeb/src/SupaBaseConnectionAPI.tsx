import { createClient } from '@supabase/supabase-js'
import { Database } from './types/supabase'
import { useEffect } from 'react'
import { utc } from 'moment'
import moment from 'moment'
import { perfil } from './types/atividade'
import { useNavigate } from 'react-router-dom'
import { DatabaseStorage } from './types/storage'

const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const storage = createClient<DatabaseStorage>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY,{
    db:{
        schema:'storage'
    }
});

export { supabase, storage, Atividades, Tags, TipoAtividades, signInWithGoogle, signout, sessao, sessaoLogada, getAvatar, InserirPerfil, Perfil, };

var now = Date.now();

const { data: Atividades } = await supabase
    .from("vw_atividade")
    .select("*")
//.gte("dataHora",moment(now).format('YYYY-MM-DD HH:mm:ss'));


const { data: Tags } = await supabase
    .from("sociedadeInterna")
    .select("*");

const { data: TipoAtividades } = await supabase
    .from("tipoAtividade")
    .select("*");

async function signInWithGoogle() {
    const { data, error: errrorSign } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            scopes: "openid profile email",
        },
    })
}

async function signout() {
    const { error } = await supabase.auth.signOut();
}


const { data: sessaoLogada, } = await supabase.auth.getSession()


const { data: sessao, error } = await supabase.auth.getSession()

const { data: User } = await supabase.auth.getUser();

const { data: Perfil, } = await supabase.from('perfis').select('*').eq('id', User.user?.id);
async function getAvatar() {
}

async function InserirPerfil() {
    const { data: User } = await supabase.auth.getUser();
    var usuario: perfil = {
        id: User.user?.id != undefined ? User.user?.id.toString() : "",
        avatar: User.user?.user_metadata['picture'],
        nome: User.user?.user_metadata['name'],
        created_at: null,
        aniversario: null
    };

    const { error } = await supabase.from("perfis").upsert([usuario]);
}


// const url = await supabase.storage.from("artes").createSignedUploadUrl("").then(
//     (value) => {
//         return value.data?.signedUrl;
//     }
// );