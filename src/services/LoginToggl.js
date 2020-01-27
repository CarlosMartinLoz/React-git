import axios from "axios";
import {Observable} from "rxjs";
import {togglLogin} from "../Constants/Uri";

export const logginToggl = (user,password) => {
            //Axios bug hay que poner las credenciales en true
            axios.defaults.withCredentials = true;
            return Observable.create(observer=>{
            axios.post(togglLogin,{"email":user,"password":password})
            .then((response)=>{
                                observer.next(response.data);
                                observer.complete();},
                                (error)=>{observer.next(error.data)})
                            }
                        )
        
        }
    

