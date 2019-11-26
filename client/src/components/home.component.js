import React from 'react';
import './css/home.css'

export default class Home extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="page-links">
                            <a href="http://localhost:3000/login">Login Page</a>
                            <center><div style={{ maxWidth: "40vw" }}>
                                <hr />
                            </div></center>
                            <a href="http://localhost:3000/create-user">Create User</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}