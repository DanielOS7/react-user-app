import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './components/home.component';
import Login from './components/login.component';
import CreateUser from './components/create-user.component'

class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
                  <Route exact path={"/"} component={Home} />
                  <Route path={"/login"} component={Login} />
                  <Route path={"/create-user"} component={CreateUser} />
          </BrowserRouter>
      );
  }
}

export default App;
