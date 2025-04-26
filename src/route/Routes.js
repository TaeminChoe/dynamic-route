import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import routeConfig, { ROLE } from ".";
import { useAuth } from "@/contexts/AuthContext";
import RootLayout from "@/components/commons/RootLayout";

function PrivateRoute({ element, requiredRole }) {
  const { isAuthenticated, role } = useAuth();

  if (!requiredRole || requiredRole.length === 0) {
    console.log("권한 없이도 들어갈 수 있는 페이지");
    return element;
  }

  if (role === ROLE.MASTER) {
    console.log("마스터 권한입니다. 어느 페이지나 접근 가능합니다.");
    return element;
  }

  if (!isAuthenticated) {
    console.log("로그인하지 않아 로그인 페이지로 이동합니다.");
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !requiredRole.includes(role)) {
    console.log("권한에 맞지 않는 페이지 접근입니다.");
    return <Navigate to="/not-found" replace />;
  }

  return element;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route, index) => {
          const { path, element, requiredRole } = route;
          if (path === "/login") {
            return (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateRoute element={element} requiredRole={requiredRole} />
                }
              />
            );
          } else {
            return (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateRoute
                    element={<RootLayout>{element}</RootLayout>}
                    requiredRole={requiredRole}
                  />
                }
              />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
}
