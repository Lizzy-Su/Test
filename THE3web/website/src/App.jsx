import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/nav";
import HomePage from "./page/homepage";
import "./styles.css"; // 导入 CSS 文件
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./component/footer";
import { Box, Grid, Container } from "@mui/material";
import ScrollToTop from "./component/scroll";

// 定义主题
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    menu: {
      main: "#fff",
      text: "#000",
    },
    tutorial: {
      main: "#000",
    },
  },
});

function App() {
  return (
    // 使用ThemeProvider包裹整个组件树，并将主题传递给它
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Container style={{ marginTop: "11vh", marginBottom: "10vh" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AllTutorial" element={<HomePage />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
