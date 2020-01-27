import React from "react";
import { Component } from "react";
import { Redirect } from "react-router";
import "./css/navbar.scss"
import axios from "axios";
import https from "https";


export default class Navbar extends Component {


    navbar = () => {
        return <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">GitTim</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                   
                </div>
            </div>
        </nav>
    }


    render() {

        return this.navbar();

    }
}