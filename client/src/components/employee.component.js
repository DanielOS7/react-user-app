import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import EmployeeService from './services/employee.service';
import { Redirect } from 'react-router-dom';

import './css/employee.css'

export default class Employee extends React.Component {

    constructor() {
        super();

        this.employeeService = new EmployeeService();

        this.state = {
            employee: [],
            edit: false,
            updateEmpo: 0,
            redirect: false
        };
    }

    setUpdateEmpo = (empno, name) => {
        this.setState({
            updateEmpo: empno
        }, () => { console.log(`Empno: ${this.state.updateEmpo} ${name} has been selected`); })

    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/create-employee' />
        }
    }

    componentDidMount = () => {

        this.employeeService.getEmployees()
            .then(data =>
                this.setState({
                    employee: data
                })
            );

        console.log(localStorage.getItem('name') + ' Saved name');
        console.log(localStorage.getItem('username') + ' Saved user');
        console.log(localStorage.getItem('role') + ' Saved role');
    }


    onSubmit = (e) => {
        console.log('onSubmit was called');

        let data = {
            'empno': this.state.updateEmpo,
            'name': e.target.formName.value,
            'address': e.target.formAddress.value
        }

        console.log(JSON.stringify(data) + ' attempted to be updated')

        this.employeeService.updateEmployee(data)

    }


    deleteEmployee = (_empno) => {

        let data = {
            'empno': _empno
        }
        console.log('Employee with ID: ' + JSON.stringify(data) + ' attempted to be deleted')


        this.employeeService.deleteEmployee(data)

        // Example of reusable employeeRequest() from employee service. 
        // this.employeeService.employeeRequest('DELETE', data, '/deleteEmployee')

    }

    editEmployeeToggle = (state) => {
        this.setState({
            edit: state
        })
    }

    render() {



        if (localStorage.getItem('loggedIn') === 'false') {
            window.location.replace("http://localhost:3000/login");
        }
        else {
            console.log(localStorage.getItem('username'));

            /* I believe localStorage.setItem may be converting data.role in login component to a string so " + " is being used to convert it to a 
            number */
            if (+localStorage.getItem('role') === 1) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="m-2" style={{position: "relative", right: "10px"}}>Employee Page</h1>
                                {this.renderRedirect()}
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th width="200px">Employee Number</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th  width="200px">Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.employee.map(data => {
                                            return (
                                                <tr key={data.empno}>
                                                    <td>
                                                        {data.empno}
                                                    </td>
                                                    <td>
                                                        {data.name}
                                                    </td>

                                                    <td>
                                                        {data.address}
                                                    </td>
                                                    <td>
                                                        <div style={{ display: "flex" }}>
                                                            <button className="btn btn-secondary button"
                                                                onClick={() => {
                                                                    this.editEmployeeToggle(true);
                                                                    this.setUpdateEmpo(data.empno, data.name);
                                                                }
                                                                }>
                                                                Edit
                                                        </button>
                                                            <button className="btn btn-danger button" onClick={() => { this.deleteEmployee(data.empno) }}>Delete</button>
                                                        </div>
                                                    </td>

                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                                <Form onSubmit={this.onSubmit} style={this.state.edit ? { display: "" } : { display: "none" }}>
                                    <Form.Group controlId="formName">
                                        <Form.Label>New Name</Form.Label>
                                        <Form.Control type="input" />
                                    </Form.Group>

                                    <Form.Group controlId="formAddress">
                                        <Form.Label>New Address</Form.Label>
                                        <Form.Control type="input" />
                                    </Form.Group>
                                    <button className="btn btn-primary  button" type="submit">
                                        Submit
                                    </button>
                                    <button className="btn btn-danger button" onClick={() => { this.editEmployeeToggle(false) }} type="button">
                                        Close
                                    </button><br /><br />
                                </Form>
                                <button className="btn btn-success"
                                    onClick={this.setRedirect}> Add Employee</button>

                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                <h1 className="m-2" style={{position: "relative", right: "10px"}}>Employee Page</h1>
                                     <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th width="200px">Employee Number</th>
                                                <th width="200px">Name</th>
                                                <th>Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.employee.map(data => {
                                                return (
                                                    <tr key={data.empno}>
                                                        <td>
                                                            {data.empno}
                                                        </td>
                                                        <td>
                                                            {data.name}
                                                        </td>
                                                        <td>
                                                            {data.address}
                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            }
        }
    }
}