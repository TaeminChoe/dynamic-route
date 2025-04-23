````markdown
# 🔐 React + CRA 동적 라우팅 연습 프로젝트 (with 인증 상태 시뮬레이션)

이 프로젝트는 CRA(Create React App)를 기반으로 React Router를 활용한 **동적 라우팅**과 **인증 상태 시뮬레이션**을 연습하기 위한 구조입니다.  
실제 로그인 기능 없이 사이드바에서 직접 로그인 상태와 사용자 권한을 선택할 수 있습니다.

---

## 📦 사용 기술 스택

- React (CRA)
- JavaScript
- React Router DOM (`react-router-dom`)
- Context API (전역 상태 관리)

---

## 🧭 로드맵

### 1️⃣ 프로젝트 초기 세팅

- [ ] CRA 프로젝트 생성
  ```bash
  npx create-react-app react-dynamic-routing
  ```
````

- [ ] React Router 설치
  ```bash
  npm install react-router-dom
  ```

---

### 2️⃣ 기본 라우팅 구성

- [ ] 페이지 목록
  - `/` (홈)
  - `/admin` (관리자 전용)
  - `/profile` (로그인 사용자 전용)
  - `/guest` (누구나 접근 가능)
  - `*` (404 Not Found)
- [ ] `<BrowserRouter>`, `<Routes>`, `<Route>` 사용

---

### 3️⃣ 전역 인증 상태 관리 (`AuthContext`)

- [ ] `AuthContext.js` 생성
  - `isAuthenticated: boolean`
  - `role: "guest" | "user" | "admin"`
  - `login()`, `logout()`, `setRole(role)`
- [ ] `AuthProvider`로 앱 전체 감싸기

---

### 4️⃣ UI 구성

- [ ] `Sidebar.js`
  - 로그인 / 로그아웃 버튼
  - 역할 선택 드롭다운 (guest / user / admin)
- [ ] `Navigation.js`
  - 페이지 이동용 메뉴 (`<Link>`)

---

### 5️⃣ ProtectedRoute 구현

- [ ] `ProtectedRoute.js` 컴포넌트 생성
  - 인증 필요 여부 확인
  - 권한(role) 검사 (`requiredRole`)
  - 조건 불충족 시 리디렉트 또는 접근 거부 메시지 표시

```jsx
<ProtectedRoute requiredRole="admin">
  <AdminPage />
</ProtectedRoute>
```

---

### 6️⃣ 페이지 컴포넌트 생성

- `HomePage.js`
- `AdminPage.js`
- `ProfilePage.js`
- `GuestPage.js`
- `NotFoundPage.js`

---

## 🧪 보너스

- [ ] `React.lazy` + `Suspense`로 페이지 코드 스플리팅
- [ ] 현재 로그인 상태/권한에 따라 메뉴 동적 표시
- [ ] 역할별 접근 테스트 케이스 정리

---

## 📝 예시 디렉토리 구조

```
src/
├── components/
│   ├── Sidebar.js
│   └── ProtectedRoute.js
├── context/
│   └── AuthContext.js
├── pages/
│   ├── HomePage.js
│   ├── AdminPage.js
│   ├── ProfilePage.js
│   ├── GuestPage.js
│   └── NotFoundPage.js
├── App.js
└── index.js
```

---

## ✅ 목표

- React Router로 동적 라우팅을 구현할 수 있다.
- Context API로 전역 인증 상태를 관리할 수 있다.
- 인증 상태와 권한에 따라 라우팅 제어가 가능하다.

```

```
