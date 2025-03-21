import { useEffect } from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  useEffect(() => {
    document.title = "Administration";
  }, []);

  return (
    <div className="admin-container flex flex-col h-screen">
      <header className="w-full h-16 bg-black text-white py-4 px-6">
        <h1 className="text-2xl font-semibold">Administration</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-200 border-r-2 border-black p-4">
          <h4 className="text-xl font-medium">Produkter</h4>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
