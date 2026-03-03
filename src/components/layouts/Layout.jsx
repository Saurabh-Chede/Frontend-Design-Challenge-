import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Header */}
        <Header />

        {/* Page Content */}
        <main className="p-3 bg-white/25">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;