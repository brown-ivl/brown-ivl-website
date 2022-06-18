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

function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <CssBaseline />
        <MainNav />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>
            <Routes>
              <Route exact path="/" element={<Main />}></Route>
              <Route exact path="/research" element={<Research />}></Route>
              <Route exact path="/ivlhome" element={<IvlHome />}></Route>
              <Route exact path="/people" element={<People />}></Route>
            </Routes>
          </Box>
        </Container>
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
