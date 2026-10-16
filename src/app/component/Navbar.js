import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '15px 40px', background: '#333', color: '#fff', display: 'flex', gap: '20px', alignItems: 'center' }}>
      <h2 style={{ margin: 0, fontSize: '18px' }}>My Web App</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/users" style={{ color: '#fff', textDecoration: 'none' }}>Add User (Form)</Link>
        <Link href="/admin" style={{ color: '#ffcc00', fontWeight: 'bold', textDecoration: 'none' }}>Admin Dashboard</Link>
      </div>
    </nav>
  );
}