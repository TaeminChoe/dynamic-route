import Sidebar from "@/components/commons/Sidebar";
import Navigation from "@/components/commons/Navigation";
import AppRoutes from "@/route/Routes";
import { BrowserRouter } from "react-router-dom";

const RootLayout = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 bg-gray-800 text-white p-4">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <header className="h-16 bg-white shadow px-6 flex items-center justify-between">
            <Navigation />
          </header>

          {/* Route Content */}
          <main className="flex-1 overflow-auto bg-gray-50 p-6">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RootLayout;
