import React from 'react';
import Form from 'react-bootstrap/Form';
import EmployeeService from './services/employee.service';
import { Redirect } from 'react-router-dom';

export default class CreateEmployee extends React.Component {

    constructor() {
        super();

        this.employeeService = new EmployeeService();

        this.state = {
            empno: 0,
            name: "",
            address: "",
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
            "name": e.target.formName.value,
            "address": e.target.formAddress.value
        }

        console.log(JSON.stringify(data) + 'attempted to be created')

        this.employeeService.createEmployee(data)
            .then(response => {

                if (response.status === 200) {
                    console.log('Employee Created');
                    this.setRedirect();
                } else {
                    alert('Failed to create employee');
                };
            })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.renderRedirect()}
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