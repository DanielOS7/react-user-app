import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const NavBar = (props) => {
    return (
        <Navbar style={{ zIndex: "1007", position: "fixed", width: "100%" }} bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="http://localhost:3000">User Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                    <Nav.Link href="http://localhost:3000/create-user">Create User</Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item href="http://localhost:3000">Home</NavDropdown.Item>
                        <NavDropdown.Item href="http://localhost:3000/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="http://localhost:3000/create-user">Create User</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <NavItem className="ml-auto">
                    {localStorage.getItem('loggedIn') === 'true' ?
                        <span style={{ display: "inline-flex" }}>
                            <p style={{ color: "white", marginRight: "15px", position: "relative", top: "8px" }}>
                                Logged in as: {localStorage.getItem('username')} ({+localStorage.getItem('role') === 1 ? 'Admin' : 'User'})</p>
                            <Button className="btn btn-danger" onClick={() => {
                                localStorage.setItem('loggedIn', 'false');
                                console.log(localStorage.getItem('loggedIn'));
                                window.location.replace('http://localhost:3000/login');
                            }}> Logout</Button>
                        </span>
                        :
                        <Button className="btn btn-primary" href="/login">Login</Button>
                    }
                </NavItem>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;
