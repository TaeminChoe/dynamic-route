import { useNavigate } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { role, logout } = useAuth();

  return (
    <header className="w-full h-16 flex items-center justify-between bg-white border-b px-6 shadow-sm">
      <div className="text-xl font-semibold text-gray-800">🧭 My App</div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          권한: <strong>{role}</strong>
        </span>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded transition"
        >
          로그아웃
        </button>
      </div>
    </header>
  );
}
