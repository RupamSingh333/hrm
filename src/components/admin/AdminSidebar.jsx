// src/components/admin/AdminSidebar.js
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <nav className="space-y-4">
        <Link href="/admin/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        <Link href="/admin/users" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Users
        </Link>
        <Link href="/admin/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
