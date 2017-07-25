import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URLS } from '../config/url.config';
import { BackendException } from '../models/BackedException';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

    constructor(private http : Http){

    }

    authentication(username : string , password : string){
        let url = URLS['authentication.url'];
        return this.http.post(url, {username:username, password:password}).map(
            response => response.json()
        ).catch(error => this.showError(error));
    }

    private showError(error : any){
        let backenException = {status:error.status, message:error._body};
        return Observable.throw(backenException);
    }
}