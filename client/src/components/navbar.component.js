import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default class NavBar extends React.Component {

    constructor() {
        super();

        this.state = {


        };
    }





    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="http://localhost:3000">User Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                        <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
                        <Nav.Link href="http://localhost:3000/create-user">Create</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="http://localhost:3000">Home</NavDropdown.Item>
                            <NavDropdown.Item href="http://localhost:3000/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="http://localhost:3000/create-user">Create User</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        );
    }
}