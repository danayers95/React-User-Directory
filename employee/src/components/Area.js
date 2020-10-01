import React, { Component } from "react";
import API from "../utils/API.js";
import Table from "./Table.js";
import Nav from "./Nav.js";
import "../styles/Area.css";

export default class Area extends Component {
    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" },
    ];

    
}