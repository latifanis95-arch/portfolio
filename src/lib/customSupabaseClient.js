import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ounoifsmcrjtnfbtrjgj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bm9pZnNtY3JqdG5mYnRyamdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1ODc2NDYsImV4cCI6MjA2NTE2MzY0Nn0.Wv4JNvwiid-vgdRr7M6ayyVBbEqjf2MxgKz6mOD4u2w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);