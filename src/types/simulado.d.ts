/**
 * Tipagens para o Simulador Petrobras (Padrão Cesgranrio)
 */

export type Dificuldade = 'Iniciante' | 'Intermediário' | 'Avançado';

export type ModoEstudo = 'Tutorial' | 'Prova Real' | 'Micro Simulado';

export type AlternativaId = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Resolution {
  /** Resumo direto e claro do conceito cobrado e da resposta correta. */
  papoReto: string;
  /** O detalhe sutil que diferencia quem sabe a matéria de quem apenas decorou. */
  puloDoGato: string;
  /** Análise detalhada de CADA alternativa incorreta. */
  cascasDeBanana: Record<AlternativaId, string>;
  /** Um mnemônico, regra ou dica fundamental para memorização. */
  dicaDeOuro: string;
}

export interface Question {
  id: string;
  discipline: string;
  topic: string;
  difficulty: Dificuldade;
  statement: string;
  options: Record<AlternativaId, string>;
  correctOption: AlternativaId;
  resolution: Resolution;
  cargo?: string; // Para questões específicas
}

export interface SimuladoParams {
  modo: ModoEstudo;
  cargoId?: number; // Referência às 24 ênfases
  disciplinaId?: string; // Para micro simulados
  quantidadeQuestoes: number;
  tempoTotal: number; // Em segundos
}

export interface SimuladoState {
  questoes: Question[];
  respostas: Record<string, AlternativaId>; // questionId -> alternativa
  perguntaAtualIndex: number;
  tempoRestante: number;
  estaPausado: boolean;
  finalizado: boolean;
  timestampInicio: number;
}

