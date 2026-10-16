'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  // ১. পাসওয়ার্ড চেক করার ফাংশন
  const handleLogin = async (e) => {
    e.preventDefault();
    if (password === '123456') {
      setIsLogin(true);
      
      // পাসওয়ার্ড মিললে ডেটাবেজ থেকে ইউজারদের ডেটা নিয়ে আসা
      const res = await fetch('/api/get-users');
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      }
    } else {
      alert('ভুল পাসওয়ার্ড!');
    }
  };

  // ২. যদি লগইন না করা থাকে, শুধু পাসওয়ার্ড ফর্ম দেখাবে
  if (!isLogin) {
    return (
      <div style={{ padding: '40px' }}>
        <h2>অ্যাডমিন লগইন</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '8px 15px' }}>লগইন</button>
        </form>
      </div>
    );
  }

  // ৩. লগইন সফল হলে শুধু টেবিল দেখাবে
  return (
    <div style={{ padding: '40px' }}>
      <h2>অ্যাডমিন ড্যাশবোর্ড</h2>
      <button onClick={() => setIsLogin(false)} style={{ marginBottom: '20px', padding: '5px 10px' }}>লগআউট</button>
      
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>আইডি</th>
            <th>নাম</th>
            <th>ইমেল</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}