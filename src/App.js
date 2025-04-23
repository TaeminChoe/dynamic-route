import React from "react";

import Provider from "./components/commons/Provider";
import RootLayout from "./components/commons/RootLayout";

function App() {
  return (
    <Provider>
      <RootLayout />
    </Provider>
  );
}

export default App;
