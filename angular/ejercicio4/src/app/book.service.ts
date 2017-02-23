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

    save(book : Book){
        return this.http.post(URl_BASE, {title: book.title, description: book.description}).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    update(book : Book){
        return this.http.put(URl_BASE+book.id, {id: book.id, title: book.title, description: book.description}).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    remove(id : number){
        return this.http.delete(URl_BASE+id).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    private showError(error : any){
        console.error(error);
        return Observable.throw("Sever error");
    }
}