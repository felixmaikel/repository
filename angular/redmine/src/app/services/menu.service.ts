import { Injectable } from '@angular/core';
import { URLS } from '../config/url.config';
import { Http, Headers } from '@angular/http';
import { BackendException } from '../models/BackedException';
import { Observable } from 'rxjs/Observable';
import { Module } from '../models/module';
import { SubModule } from '../models/subModule';
import 'rxjs/Rx';

const URL_KEY = 'menu.url';

@Injectable()
export class MenuService {

    constructor(private http : Http){

    }

    findMenuByPersonId(personId : number){
        let url = URLS[URL_KEY]+'/'+personId;
        let header = new Headers();
        header.append("Access-Control-Allow-Origin","*");
        let data : Module[];
        return this.http.get(url, header).map(
            response => response.json()               
        ).catch(error => this.throwError(error));
    }

    throwError(error : any) {
        let backException = {status:error.status, message : error._body};
        return Observable.throw(backException);
    }
}