import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home.component';
import Login from './components/login.component';
import CreateUser from './components/create-user.component';
import Employee from './components/employee.component';
import CreateEmployee from './components/create-employee.component';
import { NavBar } from './components/navbar.component';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contentMarginLeft: "64px"
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <SideNav
          style={{ backgroundColor: "#343a40", marginTop: "55px" }}

          onToggle={(toggled) => {

            if (toggled === true) {
              this.setState({
                contentMarginLeft: "240px"
              })
            }
            else {
              this.setState({
                contentMarginLeft: "64px"
              })
            }
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Home
                        </NavText>
            </NavItem>
            <NavItem eventKey="devices">
              <NavIcon>
                <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Devices
                        </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <main>
          <div style={{ marginLeft: this.state.contentMarginLeft }}>
            <BrowserRouter>
              <Route exact path={"/"} component={Home} />
              <Route path={"/login"} component={Login} />
              <Route path={"/create-user"} component={CreateUser} />
              <Route path={"/employee"} component={Employee} />
              <Route path={"/create-employee"} component={CreateEmployee} />
            </BrowserRouter>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
