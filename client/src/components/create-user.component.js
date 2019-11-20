import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateUser extends React.Component {

    constructor(){
        super();

        this.state = {
            username:"",
            password: "",
            name:"",
            role: 0

        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Was this called');

        this.setState({
            username: e.target.formUsername.value,
            password: e.target.formPassword.value,
            name:e.target.formName.value,
            role: e.target.formRole.value 
        }, () => {

            let data = {
                "username": this.state.username,
                "password": this.state.password,
                "name": this.state.name,
                "role": this.state.role
            }

            console.log(JSON.stringify(data) + "attempted to be created")
    
             fetch(`http://localhost:2700/addUser`,{
                method:'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
    
        })
        .then(response => {
 
            if (response.status === 200) {
               console.log('User Created');
               window.location.replace(`http://localhost:3000/login`);
            } else {
                alert('Login Failed');
            };
        } )
        });

         e.target.formUsername.value = "";
         e.target.formPassword.value = "";
         e.target.formName.value = "";



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

                    <button className="btn btn-primary"  type="submit">
                        Submit
                    </button>
                </Form><br/>
                <button onClick={this.getUsers}>Backend Connection Check</button>
            </div>
        );
    }
}