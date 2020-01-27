import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {Observable} from "rxjs";
import { gitLabIssues } from "../Constants/Uri";
import { map, catchError } from 'rxjs/operators';
import axios from "axios";
 
export const IssuesService = Observable.create(observer =>{
    fetch(gitLabIssues, {
        method: 'GET',
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((json) => {
            observer.next(json);
            observer.complete();

        })
        .catch((err) => {
            observer.error(err);
        });
})
