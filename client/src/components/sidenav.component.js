import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// This component is no longer used and the SideNav has been further developed in App.js
export const SideNavigation = (props) => {
    return (
        <SideNav style={{ backgroundColor: "#343a40" }}
            onSelect={(selected) => {
                
            }}>
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
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
            </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>

    );
};
