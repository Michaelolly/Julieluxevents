import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xytgzwjouuajxiufmmtm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dGd6d2pvdXVhanhpdWZtbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzODE3MjksImV4cCI6MjA1NDk1NzcyOX0.pT4Nw0CgFrNMG3P-Gbdj4o2uKrkY6LQeHuseCLEuq5o';

export const supabase = createClient(supabaseUrl, supabaseKey);
