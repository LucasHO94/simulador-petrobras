// Índice central do banco de questões — Simulador Petrobras
// Importe deste arquivo para obter questionsData completo

import { questions_basicos } from './basicos.js';
import { questions_ti_geral } from './ti-geral.js';
import { questions_ti_software } from './ti-software.js';
import { questions_ti_processos } from './ti-processos.js';
import { questions_ti_dados } from './ti-dados.js';
import { questions_eng_civil } from './eng-civil.js';
import { questions_eng_petroleo } from './eng-petroleo.js';

export const questionsData = [...questions_basicos, ...questions_ti_geral, ...questions_ti_software, ...questions_ti_processos, ...questions_ti_dados, ...questions_eng_civil, ...questions_eng_petroleo];
