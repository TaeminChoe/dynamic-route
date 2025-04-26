import React, { createContext, useState, useContext } from "react";

import { ROLE } from "@/route";

// 초기 값 설정
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [role, setRole] = useState(); // guest, user, admin

  // 로그인 함수
  const login = (id, pw) => {
    if (id === "user") {
      setRole(ROLE.USER);
      setIsAuthenticated(true);
      return true;
    } else if (id === "admin") {
      setRole(ROLE.ADMIN);
      setIsAuthenticated(true);
      return true;
    } else if (id === "master") {
      setRole(ROLE.MASTER);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // 로그아웃 함수
  const logout = () => {
    setIsAuthenticated(false);
    setRole();
  };

  // 역할 설정 함수
  const changeRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, role, login, logout, changeRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext 사용을 위한 커스텀 훅
export const useAuth = () => {
  return useContext(AuthContext);
};
