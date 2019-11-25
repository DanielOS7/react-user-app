import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default class SideNavigation extends React.Component {

    render() {
        return (
            <SideNav
                style={{ backgroundColor: "#343a40", marginTop: "55px" }}
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
        );
    }
};
