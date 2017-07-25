import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLS } from '../config/url.config';
import { BackendException } from '../models/BackedException';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const PERSON_URL = 'person.url';

@Injectable()
export class PersonService {

    constructor(private http : Http){

    }

    findPersonById(identifier : number){
        let url = URLS[PERSON_URL]+"/"+identifier;
        return this.http.get(url).map(
            response => response.json()
        ).catch(
            error => this.throwError(error)
        );
    }

     throwError(error : any) {
        let backException = {status:error.status, message : error._body};
        return Observable.throw(backException);
    }
}