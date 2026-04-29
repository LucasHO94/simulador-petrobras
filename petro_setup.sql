-- ==========================================
-- SCRIPT DE CONFIGURAÇÃO - SIMULADOR PETROBRAS
-- Execute este script no SQL Editor do seu Supabase
-- ==========================================

-- 1. Tabela de Perfis (Petro)
CREATE TABLE IF NOT EXISTS petro_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    nickname TEXT UNIQUE,
    is_premium BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de Histórico de Simulados (Petro)
CREATE TABLE IF NOT EXISTS petro_simulator_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_type TEXT NOT NULL,
    score INTEGER NOT NULL,
    passed BOOLEAN NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    domain_stats JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Chamados de Suporte (Petro)
CREATE TABLE IF NOT EXISTS petro_support_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id),
    user_email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pendente' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de Progresso Modo Estudo (Petro)
CREATE TABLE IF NOT EXISTS petro_study_progress (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    last_question_index INTEGER DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- CONFIGURAÇÃO DE SEGURANÇA (RLS)
-- ==========================================

ALTER TABLE petro_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE petro_simulator_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE petro_support_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE petro_study_progress ENABLE ROW LEVEL SECURITY;

-- Políticas para Perfis
CREATE POLICY "Users can view all petro profiles" ON petro_profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own petro profile" ON petro_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own petro profile" ON petro_profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas para Histórico
CREATE POLICY "Users can view their own petro history" ON petro_simulator_history FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own petro history" ON petro_simulator_history FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all history" ON petro_simulator_history FOR SELECT USING (auth.jwt() ->> 'email' = 'lucasho94@hotmail.com');

-- Políticas para Suporte
CREATE POLICY "Anyone can insert a petro support request" ON petro_support_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view all petro support requests" ON petro_support_requests FOR SELECT USING (auth.jwt() ->> 'email' = 'lucasho94@hotmail.com');

-- Políticas para Progresso
CREATE POLICY "Users can view their own petro progress" ON petro_study_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert/update their own petro progress" ON petro_study_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can modify their own petro progress" ON petro_study_progress FOR UPDATE USING (auth.uid() = user_id);

-- ==========================================
-- TRIGGER DE CRIAÇÃO AUTOMÁTICA DE PERFIL
-- ==========================================

CREATE OR REPLACE FUNCTION public.handle_new_petro_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.petro_profiles (id, full_name, nickname)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', 'user_' || substr(new.id::text, 1, 8));
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Nota: Se já existir um trigger similar, mude o nome
CREATE TRIGGER on_auth_user_created_petro
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_petro_user();
