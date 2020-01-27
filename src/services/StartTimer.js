import axios from "axios";
import {Observable} from "rxjs";
import {togglStart} from "../Constants/Uri";

export const requestStartTimer = (idProject,description) => {
            //Axios bug hay que poner las credenciales en true
            axios.defaults.withCredentials = true;
            return Observable.create(observer=>{
            axios.post(togglStart,{"idProject":parseInt(idProject),"description":description})
            .then((response)=>{
                                observer.next(response.data);
                                observer.complete();},
                                (error)=>{observer.next(error.data)})
                            }
                        )
        
        }