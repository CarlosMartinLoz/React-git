import React from "react";
import { Component } from "react";
import "./header.scss"
import { gitLabAuth } from "../../../Constants/Uri";
import axios from "axios";
import https from "https";

export default class Header extends Component {

    constructor(props){
        super(props);
        this.loginGitlab = this.loginGitlab.bind(this);
    }
    

    loginGitlab() {
        const agent = new https.Agent({
            rejectUnauthorized: false
        });
        axios.get(gitLabAuth, { httpsAgent: agent })
        .then(response =>{console.log(response); window.location.replace(response.data.uri)});
    }
    render(){
        return (
            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container">
                        <h1 class="masthead-heading mb-0">Controla el tiempo que trabajas</h1>
                        <h2 class="masthead-subheading mb-0"><small>Con toggl y gitlab</small></h2>
                        <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5" onClick={this.loginGitlab}>¡Empieza ahora!</a>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>);
    }
}