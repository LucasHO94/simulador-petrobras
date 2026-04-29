import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Diagnóstico Supabase URL:', supabaseUrl ? `Presente (${supabaseUrl.substring(0, 10)}...)` : 'AUSENTE');
console.log('Diagnóstico Anon Key:', supabaseAnonKey ? 'Presente' : 'AUSENTE');

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL ou Anon Key ausentes. Verifique seu arquivo .env');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
