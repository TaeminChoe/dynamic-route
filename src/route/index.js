import LoginPage from "@/pages/LoginPage";

// 페이지 컴포넌트
const HomePage = () => <div>홈 페이지</div>;
const ProfilePage = () => <div>프로필 페이지</div>;
const BoardListPage = () => <div>게시판 목록</div>;
const BoardDetailPage = () => <div>게시판 상세 페이지</div>;
const UserManagementPage = () => <div>사용자 관리</div>;
const SystemSettingsPage = () => <div>시스템 설정</div>;
const NotFoundPage = () => <div>404 페이지</div>;

// 간단한 아이콘 대체용 텍스트
const HomeIcon = () => <span>🏠</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const ClipboardListIcon = () => <span>📋</span>;
const LockIcon = () => <span>🔒</span>;

export const ROLE = {
  ADMIN: "admin",
  USER: "user",
  MASTER: "MASTER",
};

export const routeGroup = [
  {
    key: "dashboard",
    label: "대시보드",
    order: 1,
    icon: null, // 그룹 전체 아이콘도 필요하면
  },
  {
    key: "board",
    label: "게시판",
    order: 2,
  },
  {
    key: "admin",
    label: "관리",
    order: 3,
  },
  {
    key: "etc",
    label: "기타",
    order: 99,
  },
];

const routeConfig = [
  {
    path: "/",
    element: <HomePage />,
    label: "홈",
    icon: <HomeIcon />,
    groupKey: "dashboard",
    showInSidebar: true,
    order: 1,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    label: "프로필",
    icon: <UserIcon />,
    groupKey: "dashboard",
    showInSidebar: true,
    order: 2,
  },
  {
    path: "/board",
    element: <BoardListPage />,
    label: "게시판 목록",
    icon: <ClipboardListIcon />,
    groupKey: "board",
    showInSidebar: true,
    order: 1,
  },
  {
    path: "/board/:id",
    element: <BoardDetailPage />,
    showInSidebar: false,
  },
  {
    path: "/admin/users",
    element: <UserManagementPage />,
    label: "사용자 관리",
    icon: <SettingsIcon />,
    groupKey: "admin",
    showInSidebar: true,
    order: 1,
    requiredRole: [ROLE.ADMIN], // 관리자만 접근 가능
  },
  {
    path: "/admin/settings",
    element: <SystemSettingsPage />,
    label: "시스템 설정",
    icon: <LockIcon />,
    groupKey: "admin",
    showInSidebar: true,
    order: 2,
    requiredRole: [ROLE.ADMIN], // 관리자만 접근 가능
  },
  {
    path: "/login",
    element: <LoginPage />,
    showInSidebar: false,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    showInSidebar: false,
  },
];

export default routeConfig;
