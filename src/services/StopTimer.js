import axios from "axios";
import {Observable} from "rxjs";
import {togglStop} from "../Constants/Uri";

export const requestStopTimer = (idProjectGit,idIssueGit,idTimer) => {
    //Axios bug hay que poner las credenciales en true
    axios.defaults.withCredentials = true;
    return Observable.create(observer=>{
    axios.post(togglStop,{"idProject":idProjectGit,"idIssue":idIssueGit,"idTimer":idTimer})
    .then((response)=>{
                        observer.next(response.data);
                        observer.complete();},
                        (error)=>{observer.next(error.data)})
                    }
                );

}