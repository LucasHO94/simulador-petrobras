-- Tabela para armazenar o progresso persistente do Modo Estudo Geral
CREATE TABLE IF NOT EXISTS study_progress (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    last_question_index INTEGER DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE study_progress ENABLE ROW LEVEL SECURITY;

-- Políticas de Acesso
CREATE POLICY "Users can view their own study progress" 
ON study_progress FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own study progress" 
ON study_progress FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can modify their own study progress" 
ON study_progress FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
