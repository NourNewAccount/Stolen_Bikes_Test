import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Theme"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
        <Footer />
      </ThemeProvider>
  );
};

export default App;
