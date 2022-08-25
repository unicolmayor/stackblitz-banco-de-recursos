import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.VUE_SUPABASE_URL,
  process.env.VUE_SUPABASE_KEY
);
