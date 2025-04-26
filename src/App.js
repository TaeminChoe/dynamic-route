import React from "react";

import Provider from "./components/commons/Provider";
import AppRoutes from "./route/Routes";

export default function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}
