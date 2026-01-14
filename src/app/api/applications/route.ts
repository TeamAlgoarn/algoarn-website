import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    
    const { jobId, jobTitle, name, email, phone, linkedin, portfolio, message } = body;

    // Validate required fields
    if (!name || !email || !jobId || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert application into database using admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin
      .from('applications')
      .insert([
        {
          job_id: jobId,
          job_title: jobTitle,
          name,
          email,
          phone: phone || null,
          linkedin: linkedin || null,
          portfolio: portfolio || null,
          message: message || null,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}