import React from "react";

import "./global.css";
import Routes from "./routes";
import Logon from "./pages/Logon";

function App() {
  return (
    <div className="App">
      <Routes />
      <Logon />
    </div>
  );
}

export default App;
