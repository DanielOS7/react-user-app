import React from 'react';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom'



export default class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            name: '',
            role: 0
        };

        // this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Was this called');

        this.setState({
            username: e.target.formUsername.value,
            password: e.target.formPassword.value
        }, async () => {

            let data = {
                "username": this.state.username,
                "password": this.state.password
            }

            console.log(JSON.stringify(data) + " Attempted to be checked")


            const response = await fetch(`http://localhost:2700/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

            });

            const responseData = await response.json();
            const responseStatus = await response.status;



            if (responseStatus === 200) {
                console.log('Success');
                localStorage.setItem('name', responseData.name);
                localStorage.setItem('username', responseData.username);
                localStorage.setItem('role', responseData.role)
                console.log(localStorage.getItem('name') + ' Saved name');
                console.log(localStorage.getItem('username') + ' Saved user');
                console.log(localStorage.getItem('role') + ' Saved role');

                   window.location.replace(`http://localhost:3000/employee`);

            }
            else {
                alert('Login Failed');
            }


        });

        e.target.formUsername.value = "";
        e.target.formPassword.value = "";



    }

    getUsers() {
        fetch(`http://localhost:2700/getUsers`)
            .then(response => response.json())
            .then(data => console.log(data))
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="input" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="input" placeholder="Password" />
                    </Form.Group>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </Form><br />
                <button onClick={this.getUsers}>Backend Connection Check</button>
            </div>

        );
    }
}