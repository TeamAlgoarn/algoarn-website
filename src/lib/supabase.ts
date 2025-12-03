import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

// Client-side (with RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side (bypasses RLS) - use in API routes only
export const supabaseAdmin = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

// Type definitions
export type Career = {
  id: string;
  job_id: string;
  title: string;
  location: string;
  type: string;
  team: string;
  short: string;
  description?: string;
  requirements?: string[];
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type Application = {
  id: string;
  job_id: string;
  job_title: string;
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  portfolio?: string;
  message?: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  created_at: string;
};