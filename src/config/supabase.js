import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://acaffqpfkqyxgojtglgy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjYWZmcXBma3F5eGdvanRnbGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyOTIyOTUsImV4cCI6MjAzNzg2ODI5NX0.d7tEI4O1DWarDVP637fr5uDoTfjsr7VpWzWhjQXC650';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };

