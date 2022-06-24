import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import "./App.css";
import MainNav from "./components/navbar/MainNav";
import Main from "./components/main/Main";
import Research from "./components/research/Research";
import IvlHome from "./components/ivlhome/IvlHome";
import People from "./components/people/People";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <CssBaseline />
        <MainNav />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#FFFFFF" }} className="parent-box">
            <Routes>
              <Route exact path="/" element={<Main />}></Route>
              <Route exact path="/research" element={<Research />}></Route>
              <Route exact path="/ivlhome" element={<IvlHome />}></Route>
              <Route exact path="/people" element={<People />}></Route>
            </Routes>
          </Box>
        </Container>
        <Footer />
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
