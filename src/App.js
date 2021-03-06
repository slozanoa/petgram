import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Logo } from "./components/Logo";
import { Router } from "@reach/router";
import { NavBar } from './components/NavBar'
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
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
      <UserLogged>
        {({isAuth}) =>
          isAuth ?
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>}
      </UserLogged>
      <NavBar />
    </div>
  );
};
