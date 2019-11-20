import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './css/employee.css'


export default class Employee extends React.Component {
    constructor() {
        super();

        this.state = {
            employee: []
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
    }


    render() {
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
                                        <button className="btn btn-secondary button">Edit</button>
                                        <button className="btn btn-danger button">Delete</button>
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