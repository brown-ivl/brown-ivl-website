import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import "./App.css";
import MainNav from "./components/navbar/MainNav";
import Main from "./components/main/Main";
import React from "react";

function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>
            <MainNav />
            <Routes>
              <Route path="/" element={<Main />}></Route>
            </Routes>
          </Box>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
