import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uocpgjiumskgbrvsuhvx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvY3Bnaml1bXNrZ2JydnN1aHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NTkwMjcsImV4cCI6MjA1MzMzNTAyN30.7iNrnI43RDXL7sJKvs1YQ5yEiCrnn4UquzZV3QBnbr0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      supabase,
    },
  };
});
