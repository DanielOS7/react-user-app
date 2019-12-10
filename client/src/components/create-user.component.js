import React from 'react';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import UserService from './services/user.service';

export default class CreateUser extends React.Component {

    constructor() {
        super();

        this.userService = new UserService();

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

        let data = {
            "username": e.target.formUsername.value,
            "password": e.target.formPassword.value,
            "name": e.target.formName.value,
            "role": e.target.formRole.value
        }

        console.log(JSON.stringify(data) + ' attempted to be created')

        this.userService.createUsers(data)
            .then(response => {
                if (response.status === 200) {
                    console.log('New User Created');
                    this.setRedirect();
                } else {
                    alert('User failed to create');
                };
            })


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.renderRedirect()}
                        <h1 className="m-2" style={{position: "relative", right: "10px"}}>Create User Page</h1>
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