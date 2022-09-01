import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://psmspglrbgvduffziqkk.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbXNwZ2xyYmd2ZHVmZnppcWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4ODAwODYsImV4cCI6MTk3NzQ1NjA4Nn0.ki5dl-QvjOK8NrhtGoH9ldJuj73zV5RexQj848V7imY';

export default createClient(supabaseUrl, supabaseAnonToken);
