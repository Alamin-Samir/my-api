import { NextResponse } from 'next/server';

export async function POST(request) {
  // ১. ক্লায়েন্ট বা ব্রাউজার থেকে পাঠানো ডেটা রিসিভ করা
  const body = await request.json();
  
  const name = body.name;
  const age = body.age;

  // ২. সার্ভার থেকে রেসপন্স বা উত্তর পাঠানো
  return NextResponse.json({
    success: true,
    message: "ডেটা সফলভাবে সার্ভারে পৌঁছে গেছে!",
    receivedData: {
      userName: name,
      userAge: age
    }
  });
}