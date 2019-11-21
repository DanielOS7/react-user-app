import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateEmployee extends React.Component {

    constructor() {
        super();

        this.state = {
            empno: 0,
            name: "",
            address: ""

        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Was this called');

        this.setState({
            name: e.target.formName.value,
            address: e.target.formAddress.value,
        }, () => {

            let data = {
                "name": this.state.name,
                "address": this.state.address
            }

            console.log(JSON.stringify(data) + "attempted to be created")

            fetch(`http://localhost:2700/addEmployee`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

            })
                .then(response => {

                    if (response.status === 200) {
                        console.log('Employee Added');
                        window.location.replace(`http://localhost:3000/employee`);
                    } else {
                        alert('Failed to add employee');
                    };
                })
        });

        e.target.formName.value = "";
        e.target.formAddress.value = "";



    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="m-2">Create Employee Page</h1>
                        <div>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="input" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="input" placeholder="Address" />
                                </Form.Group>
                                <button className="btn btn-primary" type="submit">
                                    Submit
                    </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}