import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

export default class CreateUser extends React.Component {

    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            name: "",
            role: 0,
            redirect: false
        };
    }


    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit was called');

        this.setState({
            username: e.target.formUsername.value,
            password: e.target.formPassword.value,
            name: e.target.formName.value,
            role: e.target.formRole.value
        }, () => {

            let data = {
                "username": this.state.username,
                "password": this.state.password,
                "name": this.state.name,
                "role": this.state.role
            }

            console.log(JSON.stringify(data) + "attempted to be created")

            fetch(`http://localhost:2700/addUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

            })
                .then(response => {

                    if (response.status === 200) {
                        console.log('User Created');
                        this.setRedirect();
                    } else {
                        alert('User failed to create');
                    };
                })
        });

        e.target.formUsername.value = "";
        e.target.formPassword.value = "";
        e.target.formName.value = "";
    }

    // Not used
    getUsers() {
        fetch(`http://localhost:2700/getUsers`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.renderRedirect()}
                        <h1 className="m-2">Create User Page</h1>
                        <div>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="input" placeholder="Enter Username" />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="input" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="input" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control as="select">
                                        <option>Admin</option>
                                        <option>User</option>
                                    </Form.Control>
                                </Form.Group>

                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </Form><br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}