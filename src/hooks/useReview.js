import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useReview(session) {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQueue = async () => {
    if (!session?.user?.id) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('petro_review_queue')
        .select('*')
        .eq('user_id', session.user.id)
        .lte('next_review_date', new Date().toISOString())
        .order('next_review_date', { ascending: true });

      if (error) throw error;
      setQueue(data || []);
    } catch (e) {
      console.error('Error fetching review queue:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, [session]);

  const processReview = async (questionId, isCorrect) => {
    if (!session?.user?.id) return;
    
    // Simple SRS Algorithm
    // If correct, review in 3 days. If incorrect, review tomorrow.
    const intervalDays = isCorrect ? 3 : 1;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);

    try {
      await supabase
        .from('petro_review_queue')
        .upsert({
          user_id: session.user.id,
          question_id: questionId,
          next_review_date: nextDate.toISOString(),
          status: isCorrect ? 'reviewing' : 'learning'
        }, { onConflict: 'user_id, question_id' });
        
      // Update local state
      setQueue(prev => prev.filter(item => item.question_id !== questionId));
    } catch (e) {
      console.error('Error updating review status:', e);
    }
  };

  return { queue, loading, processReview, refreshQueue: fetchQueue };
}
