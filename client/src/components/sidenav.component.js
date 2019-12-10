import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default class SideNavigation extends React.Component {

    render() {
        return (
            <SideNav
                style={{ backgroundColor: "#343a40", color: "white", top: "40px", position: "fixed" }}
                onToggle={(toggled) => {
                    if (toggled === true) {
                        this.props.setConentPush("240px");
                    }
                    else {
                        this.props.setConentPush("64px");
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav >
                    <NavItem eventKey="home"
                        onClick={() => {
                            window.location.replace("http://localhost:3000");
                            // this.setRedirect(true, "login");
                            // this.renderRedirect("home"); Attempted this in setRedirect setState callback.
                            // this.setRedirect(false); Attempted this in setRedirect.
                        }}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faHome} />
                        </NavIcon>
                        <NavText>
                            Home
                          </NavText>
                    </NavItem>

                    {/* Will only have links to login in navbar not sidenav */}
                    {/* <NavItem eventKey="login"
                    onClick={() => {window.location.replace("http://localhost:3000/login");}}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faLock} />
                        </NavIcon>
                        <NavText>
                            Login
                          </NavText>
                    </NavItem> */}

                    <NavItem eventKey="employee"
                        onClick={() => {
                            window.location.replace("http://localhost:3000/employee");
                        }}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faUser} />
                        </NavIcon>
                        <NavText>
                            Employees
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        );
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         redirect: false
    //     };
    // }

    // setRedirect = (_redirect, _path) => {
    //     this.setState({
    //         redirect: _redirect
    //     }, () => {
    //         if (this.state.redirect) {
    //             return <Redirect to={`/${_path}`}/>
    //         }
    //     })

    // //  Not to be used
    //     this.setState({

    //         redirect: !this.state.redirect
    //     })
    // }

    // renderRedirect = (_path) => {
    //     if (this.state.redirect) {
    //         return <Redirect to= {`/employee/${_path}`  } />
    //     }
    // }

};
