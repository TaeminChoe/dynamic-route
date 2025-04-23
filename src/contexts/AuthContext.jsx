import React, { createContext, useState, useContext } from "react";

// 초기 값 설정
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("guest"); // guest, user, admin

  // 로그인 함수
  const login = () => {
    setIsAuthenticated(true);
  };

  // 로그아웃 함수
  const logout = () => {
    setIsAuthenticated(false);
    setRole("guest"); // 로그아웃 시 역할도 guest로 초기화
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
