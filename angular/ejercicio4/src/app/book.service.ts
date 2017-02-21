import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from './book.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const URl_BASE = 'http://localhost:8080/books/';

@Injectable()
export class BookService {
    private http : Http;

    constructor(http : Http) {
        this.http = http;
    }

    findAll(){
        return this.http.get(URl_BASE).map(
            response => response.json()
        ).catch(error => this.showError(error));
    }

    find(identifier : number | string){
        let url = URl_BASE+identifier;
        return this.http.get(url).map(
            response => response.json()
        ).catch(error => this.showError(error));
    }

    private showError(error : any){
        console.error(error);
        return Observable.throw("Sever error");
    }
}