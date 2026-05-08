import { useState, useEffect, useCallback, useRef } from 'react';

export const useSimulado = (initialQuestions, mode, totalTimeSeconds) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(totalTimeSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef(null);

  // handleFinish deve ser declarada ANTES do useEffect que a usa
  const handleFinish = useCallback(() => {
    setIsFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // Reinicia cronômetro quando o modo ou tempo total muda
  useEffect(() => {
    setTimeLeft(totalTimeSeconds);
  }, [mode, totalTimeSeconds, isFinished]);

  // Lógica do Cronômetro — não inicia se ainda não há questões carregadas
  useEffect(() => {
    if (!isPaused && !isFinished && initialQuestions.length > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isFinished, handleFinish, initialQuestions.length]);

  const handleAnswer = useCallback((questionId, optionId) => {
    if (isFinished) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  }, [isFinished]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < initialQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, initialQuestions.length]);

  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const goToQuestion = useCallback((index) => {
    if (index >= 0 && index < initialQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  }, [initialQuestions.length]);

  const resetSimulado = useCallback(() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeft(totalTimeSeconds);
    setIsFinished(false);
    setIsPaused(false);
  }, [totalTimeSeconds]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? String(h).padStart(2, '0') + ':' : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const calculateScore = useCallback(() => {
    if (initialQuestions.length === 0) return { correct: 0, total: 0, percentage: 0, score: 0 };
    let correct = 0;
    initialQuestions.forEach(q => {
      if (answers[q.id] === q.correctOption) {
        correct++;
      }
    });
    return {
      correct,
      total: initialQuestions.length,
      percentage: Math.round((correct / initialQuestions.length) * 100),
      score: Math.round((correct / initialQuestions.length) * 1000),
    };
  }, [initialQuestions, answers]);

  return {
    questions: initialQuestions,
    currentQuestion: initialQuestions[currentQuestionIndex],
    currentQuestionIndex,
    answers,
    timeLeft,
    isPaused,
    isFinished,
    formatTime,
    handleAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    handleFinish,
    resetSimulado,
    calculateScore,
    togglePause: () => setIsPaused(!isPaused),
  };
};
