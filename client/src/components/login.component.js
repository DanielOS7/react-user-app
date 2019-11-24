import React from 'react';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';


export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            name: '',
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
            return <Redirect to='/employee' />
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit was called');


        let data = {
            "username": e.target.formUsername.value,
            "password": e.target.formPassword.value
        }

        fetch(`http://localhost:2700/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.status === 200 ? response.json() : response.json().catch(err => err))
            .then(data => {
                console.log(data);

                // data.username chosen as condition as data.name logs "SyntaxError:" instead of undefined. 
                if (data.username !== undefined) {
                    console.log('Success');

                    localStorage.setItem('name', data.name);
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('role', data.role);

                    console.log(localStorage.getItem('name') + ' Saved name');
                    console.log(localStorage.getItem('username') + ' Saved user');
                    console.log(localStorage.getItem('role') + ' Saved role');

                    this.setRedirect();
                }
                else {
                    alert('Login Failed');
                }
            })

        e.target.formUsername.value = "";
        e.target.formPassword.value = "";
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
                        <h1 className="m-2">Login Page</h1>
                        <div>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="input" placeholder="Username" />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
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