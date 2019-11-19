import React from 'react';
import './css/home.css'

export default class Home extends React.Component {


    render() {
        return (
            <div className="page-links">
                <a href="http://www.google.com">Home Page</a>
                <center><div style={{maxWidth: "40vw"}}>
                <hr/>
                </div></center>
                <a href="http://www.google.com">Login Page</a>
            </div>
        );
    }
}