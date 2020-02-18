import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home.component';
import Login from './components/login.component';
import CreateUser from './components/create-user.component';
import Employee from './components/employee.component';
import CreateEmployee from './components/create-employee.component';
import NavBar from './components/navbar.component';
import SideNavigation from './components/sidenav.component';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contentMarginLeft: "64px"
    }
  }

  setConentPush = (_contentMarginLeft) => {
    this.setState({
      contentMarginLeft: _contentMarginLeft
    });
    return _contentMarginLeft;
  }

  render() {
    return (
      <div>
        <NavBar />
        <SideNavigation
          setConentPush={this.setConentPush}
        />
        <div style={{ marginLeft: this.state.contentMarginLeft, position: "relative", top: "60px" }}>
          <BrowserRouter>
            <Route exact path={"/"} component={Home} />
            <Route path={"/login"} component={Login} />
            <Route path={"/create-user"} component={CreateUser} />
            <Route path={"/employee"} component={Employee} />
            <Route path={"/create-employee"} component={CreateEmployee} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
