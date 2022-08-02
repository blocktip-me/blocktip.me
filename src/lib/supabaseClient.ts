import { createClient } from '@supabase/supabase-js';

const options = {
	schema: 'public',
	headers: { 'x-my-custom-header': 'my-app-name' },
	autoRefreshToken: true,
	persistSession: true,
	detectSessionInUrl: true
};

const projectUrl = import.meta.env.VITE_SUPABASE_URL || '';
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(projectUrl, anonKey, options);

export default supabase;
