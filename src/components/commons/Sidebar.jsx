import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";
import routeConfig from "@/route";

const Sidebar = () => {
  const { isAuthenticated, role, logout } = useAuth(); // 인증 상태와 역할 가져오기

  return (
    <div className="sidebar">
      <h2>My App</h2>
      <nav>
        <ul>
          {routeConfig.map((route, index) => {
            // 1. 로그인 안 되어 있으면 로그인 페이지로
            if (route.requiredRole && !isAuthenticated) {
              return null; // 로그인 상태에서만 나열되는 링크
            }

            // 2. 권한이 맞지 않으면 (로그인 되어 있더라도)
            if (route.requiredRole && !route.requiredRole.includes(role)) {
              return null; // 권한 없는 메뉴는 숨기기
            }

            return (
              <li key={index}>
                <Link to={route.path}>
                  {route.path === "/" ? "Home" : route.path.replace("/", "")}
                </Link>
              </li>
            );
          })}
          <li>
            {isAuthenticated ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
