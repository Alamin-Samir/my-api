import { NextResponse } from 'next/server';

// একটি সিম্পল GET এপিআই তৈরি করা
export async function GET() {
  const data = {
    message: "স্বাগতম! সফলভাবে আপনার প্রথম এপিআই তৈরি করেছেন।",
    success: true,
    coder: "সামির"
  };

  return NextResponse.json(data);
}