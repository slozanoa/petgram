import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Logo } from "./components/Logo";
import { Router } from "@reach/router";
import { Detail } from "./pages/Detail";
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="detail/:detailId" />
      </Router>
    </div>
  );
};
