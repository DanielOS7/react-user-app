import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home.component';
import Login from './components/login.component';
import CreateUser from './components/create-user.component';
import Employee from './components/employee.component';
import CreateEmployee from './components/create-employee.component';
import {NavBar} from './components/navbar.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Route exact path={"/"} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/create-user"} component={CreateUser} />
          <Route path={"/employee"} component={Employee} />
          <Route path={"/create-employee"} component={CreateEmployee} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
