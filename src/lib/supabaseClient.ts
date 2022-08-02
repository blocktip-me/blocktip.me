import { createClient } from '@supabase/supabase-js';

const options = {
	schema: 'public',
	headers: { 'x-my-custom-header': 'my-app-name' },
	autoRefreshToken: true,
	persistSession: true,
	detectSessionInUrl: true
};

const projectUrl = process.env.SUPABASE_URL || '';
const anonKey = process.env.SUPABASE_ANON_KEY || '';

const supabase = createClient(projectUrl, anonKey, options);

export default supabase;
