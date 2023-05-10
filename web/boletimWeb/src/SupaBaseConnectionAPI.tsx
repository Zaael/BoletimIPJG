import { createClient } from '@supabase/supabase-js'
import { Database } from './types/supabase'
import { useEffect } from 'react'
import { utc } from 'moment'
import moment from 'moment'

const supabaseUrl = 'https://zlgefsrnumtlfugftpyf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZ2Vmc3JudW10bGZ1Z2Z0cHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxMzcxNzEsImV4cCI6MTk5ODcxMzE3MX0.0Denn0lM1Pk689Jl6kDkkDAQ393DxmVzmyoNGY55L30"
const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export {supabase, Atividades, Tags};

var now = Date.now();

const { data: Atividades } = await supabase
.from("atividades")
.select("*")
.gte("dataHora",moment(now).format('YYYY-MM-DD HH:mm:ss'));


const { data: Tags } = await supabase
.from("sociedadeInterna")
.select("*");