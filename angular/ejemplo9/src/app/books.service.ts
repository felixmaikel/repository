import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

const URL_BASE = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Injectable()
export class BooksService {

    private http : Http;

    constructor(http : Http){
        this.http = http;
    }

    getBooks(title : string){
        let url = URL_BASE+title;
        return this.http.get(url).map(response => this.extractTitles(response));
    }

    private extractTitles(response :  Response){
        return response.json().items.map(book => book.volumeInfo.title);
    }
}