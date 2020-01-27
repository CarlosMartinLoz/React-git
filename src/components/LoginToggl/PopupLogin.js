import React from "react";
import './Popup.scss';
import {logginToggl} from "../../services/LoginToggl";



export default class PopupLogin extends React.Component {
    constructor(props){
        super(props);
        let yourRegex = /\W*(toggleToken)\W*/;
        let cookie = document.cookie; 
        this.state = {
            show : !cookie.split(";").some(e => yourRegex.test(e)),
            user: "",
            password:""
        }

    }

    login = ()=>{
        logginToggl(this.state.user,this.state.password).subscribe((data)=>{
            console.log(data);
            this.setState(state=>
            {return {show : !state.show}})});
    }

    usernameChange(event){
        let stateChange = this.state;
        stateChange.user = event.target.value; 
        
        this.setState( {stateChange});
        
    }

    passwordChange(event){
        let stateChange = this.state;
        stateChange.password = event.target.value; 
        this.setState( {stateChange});
    }
    
    popUp = () => {
        if(this.state.show){
            return (
            <div class="popup wrapper fadeInDown">
            <div className='popup-inner'>
                <div className='popup-inner' id="formContent">
                </div>


                <div class="input-login">
                    <input class = "mx-auto" type="text" id="login" class="fadeIn second" 
                    name="login" placeholder="login" value={this.state.user} onChange={this.usernameChange.bind(this)}/>
                    <input class="mx-auto" type="password" id="password" class="fadeIn third" name="password" placeholder="password" onChange={this.passwordChange.bind(this)} />
                    <input class="mx-auto" type="submit"  class="fadeIn fourth"  onClick={this.login}/>
                </div>
            </div>
        </div>);
        }else{
            return null;
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.popUp()}
            </React.Fragment>

        );
    }
}


