import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './css/employee.css'


export default class Employee extends React.Component {
    constructor() {
        super();

        this.state = {
            employee: [],
            edit: false,
            updateEmpo: 0
        };
    }

    componentDidMount = () => {
        fetch(`http://localhost:2700/getEmployee`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    employee: data
                }, () => { console.log(this.state); })

            })

        console.log(localStorage.getItem('name') + ' Saved name');
        console.log(localStorage.getItem('username') + ' Saved user');
        console.log(localStorage.getItem('role') + ' Saved role');
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Was this called');

        this.setState({
            name: e.target.formName.value,
            address: e.target.formAddress.value,
        }, () => {

            let data = {
                "empno": this.state.updateEmpo,
                "name": this.state.name,
                "address": this.state.address
            }

            console.log(JSON.stringify(data) + "attempted to be created")

            fetch(`http://localhost:2700/updateEmployee`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

            })
                .then(response => {

                    if (response.status === 200) {
                        console.log('Employee Updated');
                        window.location.replace(`http://localhost:3000/employee`);
                    } else {
                        alert('Failed to updaate employee');
                    };
                })
        });

        e.target.formName.value = "";
        e.target.formAddress.value = "";



    }

    deleteEmployee(_empno) {

        let data = {
            "empno": _empno
        }
        console.log(JSON.stringify(data) + " " + _empno)
        fetch(`http://localhost:2700/deleteEmployee`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        })

        window.location.reload();

    }

    editEmployee = (state) => {
        this.setState({
            edit: state
        })
    }


    uploade

    redirect() {
        window.location.replace(`http://localhost:3000/create-employee`);
    }


    render() {

        let _updatedeEmpno;

        if (localStorage.getItem('role') == 1) {
            return (
                <div>
                    <div>Employee Page</div>
                    {/* <button onClick={this.getEmployees}></button> */}

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Employee Number</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employee.map(data => {
                                return (
                                    <tr>
                                        <td key={data.empno}>
                                            {data.empno}
                                        </td>
                                        <td>
                                            {data.name}
                                        </td>

                                        <td>
                                            {data.address}
                                        </td>
                                        <td>
                                            <button className="btn btn-secondary button"
                                                onClick={() => {
                                                    this.editEmployee(true);
                                                    this.setState({
                                                        updateEmpo: data.empno
                                                    }, () => {
                                                        console.log(this.state.updateEmpo + "meeeeee");
                                                        });

                                                }
                                                }>Edit
                                            </button>
                                            <button className="btn btn-danger button" onClick={() => { this.deleteEmployee(data.empno) }}>Delete</button>
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Form onSubmit={ this.onSubmit } style={this.state.edit ? { display: "" } : { display: "none" }}>
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
                        <button className="btn btn-danger" onClick={() => { this.editEmployee(false) }} type="button">
                            Close
                    </button><br /><br />
                    </Form>
                    <button className="btn btn-success" onClick={this.redirect} >Add Employee</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div>Employee Page</div>
                    {/* <button onClick={this.getEmployees}></button> */}

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Employee Number</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employee.map(data => {
                                return (
                                    <tr>
                                        <td key={data.empno}>
                                            {data.empno}
                                        </td>
                                        <td>
                                            {data.name}
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            );

        }

    }
}