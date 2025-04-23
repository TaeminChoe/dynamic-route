import routeConfig, { ROLE } from "@/route";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {routeConfig.map((route, index) => {
          // 로그인 안 되어 있으면 로그인 페이지로
          if (route.requiredRole && !route.requiredRole.includes(ROLE.USER)) {
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
      </ul>
    </nav>
  );
};

export default Navigation;
