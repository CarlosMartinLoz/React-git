import React, { ReactFragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar";
import TableGit from "./components/table-proyects/table";
import Sidebar from "./components/sidebar/sidebar";
import PopupLogin from "./components/LoginToggl/PopupLogin";
import LandingPage from "./components/LandingPage/LandingPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/issues">
              <Sidebar></Sidebar>
              <TableGit></TableGit>
              <PopupLogin></PopupLogin>
             
            </Route>
            <Route path="/">
              <Navbar></Navbar>
              <LandingPage></LandingPage>
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}


