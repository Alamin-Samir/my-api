'use client';
import { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link for navigation

export default function UsersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to API route
      const response = await fetch('/api/add-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Data saved successfully to database!');
        setName('');
        setEmail('');
      } else {
        setMessage('Error: ' + result.error);
      }
    } catch (error) {
      setMessage('Something went wrong!');
    }
  };

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      {/* Navigation Links */}
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <Link href="/users" style={{ color: 'blue', textDecoration: 'underline' }}>Add User</Link>
        <Link href="/admin" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'underline' }}>Go to Admin Dashboard</Link>
      </nav>

      <h1>Add New User (Users Page)</h1>
      <p>This is a fresh page separated from the home page.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px', marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: '8px' }}
          required 
        />
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: '8px' }}
          required 
        />
        <button type="submit" style={{ padding: '10px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
          Save to Database
        </button>
      </form>

      {message && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{message}</p>}
    </main>
  );
}