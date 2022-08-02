import supabase from '../lib/supabaseClient';
import type { User } from '../types/user';

const createProfile = async (user: User) => {
	const { data, error } = await supabase.from('creadoors').insert([user]);

	console.log(data);
};

export default createProfile;
