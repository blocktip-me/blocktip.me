import supabase from '../lib/supabaseClient';
import type { User } from '../types/user';

const createProfile = async (user: User) => {
    return await supabase.from('creadoors').insert([user]);
};

export default createProfile;
