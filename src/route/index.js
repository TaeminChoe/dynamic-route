import AdminPage from "../pages/AdminPage";
import GuestPage from "../pages/GuestPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";

export const ROLE = {
  ADMIN: "admin",
  USER: "user",
};

// 라우트 정보 배열
const routeConfig = [
  { path: "/", element: <HomePage /> }, // 누구나 접근 가능
  { path: "/guest", element: <GuestPage /> },
  { path: "/profile", element: <ProfilePage />, requiredRole: ROLE.USER }, // 로그인된 사용자만 접근
  { path: "/admin", element: <AdminPage />, requiredRole: ROLE.ADMIN }, // 관리자만 접근
  { path: "/login", element: <LoginPage /> }, // 관리자만 접근
  { path: "*", element: <NotFoundPage /> },
];

export default routeConfig;
