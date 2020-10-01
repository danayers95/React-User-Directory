import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>User Directory</h1>
                <p>Click on a user's name to sort by name or use our searchbar to narrow your search!</p>
            </div>
        );
    }
}