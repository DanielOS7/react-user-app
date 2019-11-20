import React from 'react';
import Form from 'react-bootstrap/Form';



export default class Login extends React.Component {


    onSubmit(e) {
        e.preventDefault();
        console.log(e.target.formUsername.value);
        console.log('Was this called');

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
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </Form>
                <button onClick={this.getUsers}>Backend Connection Check</button>
            </div>

        );
    }
}