import React from "react";
import { Component } from "react";
import "./logo.scss";
import axios from "axios";
import https from "https";
import Header from "./componentsLandingPage/header";
import { gitLabAuth } from "../../Constants/Uri";


export default class Logo extends Component {
    constructor(props){
        super(props);
        this.loginGitlab = this.loginGitlab.bind(this);
    }
    

    loginGitlab() {
        const agent = new https.Agent({
            rejectUnauthorized: false
        });


    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <section>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-lg-2">
                                <div class="p-5">
                                    <img class="img-fluid rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Simple_icon_time.svg/1280px-Simple_icon_time.svg.png" alt="12312" />
                                </div>
                            </div>
                            <div class="col-lg-6 order-lg-1">
                                <div class="p-5">
                                    <h2 class="display-4">Registra el tiempo que trabajas con Toggl</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <img class="img-fluid " src="https://www.redeszone.net/app/uploads-redeszone.net/2017/09/GitLab-detectado-fallo-de-seguridad-1-930x452.png" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 class="display-4">A su vez guardalo en gitlab</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <footer class="py-5 bg-black">
                    <div class="container">
                        <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2019</p>
                    </div>

                </footer>
            </React.Fragment>

        );
    }
}