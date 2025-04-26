import Sidebar from "@/components/commons/Sidebar";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-white p-4">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <Header />

        {/* Route Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  );
}
