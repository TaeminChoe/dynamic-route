import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";
import routeConfig, { ROLE, routeGroup } from "@/route";

export default function Sidebar() {
  const { role } = useAuth();

  // 그룹별로 라우트 설정을 정렬
  const groupedRoutes = routeGroup.map((group) => {
    // 해당 그룹에 속하는 라우트만 필터링 후, 정렬
    const routes = routeConfig
      .filter((route) => {
        if (route.groupKey !== group.key) return false;
        if (!route.showInSidebar) return false;
        if (role === ROLE.MASTER) return true;
        if (!route.requiredRole) return true;
        return route.requiredRole.includes(role);
      })
      .sort((a, b) => a.order - b.order); // 각 그룹 내에서 순서대로 정렬

    return {
      ...group,
      routes,
    };
  });

  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-full">
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-6">메뉴</h2>
        <div>
          {groupedRoutes
            .sort((a, b) => a.order - b.order) // 그룹 순서대로 정렬
            .map((group) => (
              <div key={group.key} className="mb-4">
                <div className="font-semibold text-lg">{group.label}</div>
                <ul className="mt-2">
                  {group.routes.map((route) => (
                    <li
                      key={route.path}
                      className="py-2 px-3 hover:bg-gray-700"
                    >
                      <Link to={route.path} className="flex items-center">
                        {route.icon && (
                          <span className="mr-2">{route.icon}</span>
                        )}
                        <span>{route.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
