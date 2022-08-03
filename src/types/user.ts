interface Links {
  website?: string;
  twitter?: string;
  github?: string;
  youtube?: string;
}

interface Wallets {
  sol: string;
}

export interface User {
  id?: string;
  created_at?: Date;
  username: string;
  royalty: boolean;
  links: Links;
  about: string;
  avatar_url?: string;
  wallets: Wallets;
  display_name: string;
}
