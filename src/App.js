import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

function App() {
  return (
    <Frame className="App">
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:detailNumber" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </Frame>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0 auto;
    text-align: center;
  }
`;

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`;
