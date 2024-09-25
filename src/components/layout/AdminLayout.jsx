// src/components/layout/AdminLayout.js
import AdminHeader from '../admin/AdminHeader';
import AdminSidebar from '../admin/AdminSidebar';
import Footer from './Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin Header */}
      <AdminHeader />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <main className="flex-grow p-4 bg-gray-100">
          {children}
        </main>
      </div>

      {/* Common Footer */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
