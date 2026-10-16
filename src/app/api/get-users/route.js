import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    // ১. লোকাল MySQL (XAMPP) ডেটাবেজের সাথে কানেকশন তৈরি
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'my_database'
    });

    // ২. ডেটাবেজ থেকে সব ইউজার রিড বা সিলেক্ট করার কুয়েরি
    const query = 'SELECT * FROM users';
    const [rows] = await connection.execute(query);

    // ৩. কানেকশন বন্ধ করা
    await connection.end();

    // ৪. ডেটাগুলো সফলভাবে ক্লায়েন্টের কাছে পাঠিয়ে দেওয়া
    return NextResponse.json({
      success: true,
      data: rows
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch data!",
      error: error.message
    }, { status: 500 });
  }
}