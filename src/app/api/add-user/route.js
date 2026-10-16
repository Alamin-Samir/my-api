import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'my_database'
    });

    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [name, email];
    
    const [result] = await connection.execute(query, values);

    await connection.end();

    return NextResponse.json({
      success: true,
      message: "Data saved successfully to MySQL!",
      insertedId: result.insertId
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to save data to MySQL!",
      error: error.message
    }, { status: 500 });
  }
}