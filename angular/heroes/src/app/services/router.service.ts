import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const URL_INFO = "app/config/url.json";

@Injectable()
export class RouterService {

    constructor(private http : Http){

    }

    getUrl(key : string){
        return this.http.get(URL_INFO).map(
            response => {
                let data = response.json();
                for(var i=0; data.length; i++){
                    if(data[i].key == key){
                        response = data[i].url;
                    }
                }
            }
        );
    }
}