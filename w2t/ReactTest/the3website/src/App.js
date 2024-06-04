import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/nav";
import HomePage from "./page/homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 其他页面的路由配置 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
