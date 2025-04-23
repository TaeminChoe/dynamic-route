import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import routeConfig from ".";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ element, requiredRole }) {
  const { isAuthenticated, role } = useAuth(); // 인증 상태와 역할 가져오기

  if (!isAuthenticated) {
    // 로그인되지 않은 경우, 로그인 페이지로 리디렉션
    return <Navigate to="/login" />;
  }

  if (requiredRole && requiredRole !== role) {
    // 역할이 일치하지 않으면, 404 페이지로 리디렉션
    return <Navigate to="/notfound" />;
  }

  return element;
}

export default function AppRoutes() {
  const { isAuthenticated, role } = useAuth(); // 인증 상태와 역할 가져오기

  return (
    <Routes>
      {routeConfig.map((route, index) => {
        const { path, element, requiredRole } = route;

        // 1. requiredRole이 없거나 비어 있으면 모든 사용자 접근 가능
        if (!requiredRole || requiredRole.length === 0) {
          return <Route key={index} path={path} element={element} />;
        }

        // 2. 로그인 안 되어 있으면 LoginPage로 리디렉션
        if (!isAuthenticated) {
          return (
            <Route key={index} path={path} element={<Navigate to="/login" />} />
          );
        }

        // 3. 권한이 맞지 않으면, 로그인 되어 있으면 NotFoundPage로 리디렉션
        if (requiredRole && !requiredRole.includes(role)) {
          return (
            <Route
              key={index}
              path={path}
              element={<Navigate to="/not-found" />}
            />
          );
        }

        // 4. 권한이 맞고 로그인 되어 있으면 페이지 렌더링
        return <Route key={index} path={path} element={element} />;
      })}
    </Routes>
  );
}
