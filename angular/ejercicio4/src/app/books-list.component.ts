import { Component, OnInit } from '@angular/core';
import { Book } from './book.component';
import { BookService } from './book.service';

@Component({
    selector : 'books-list',
    templateUrl : './books-list.component.html',
    styleUrls : ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {
 
    books : Book[] = [];
    private bookService : BookService;

    constructor(bookService : BookService) {
        this.bookService = bookService;
    }

    ngOnInit(){
        this.findAll();
    }

    findAll(){
        this.bookService.findAll().subscribe(
           response => this.convertToBooks(response) 
        );
    }

    private convertToBooks(response){
        this.books = [];
        for(var i=0; response.length; i++){
            this.books.push({id: response[i].id, title: response[i].title, description: response[i].description});
        }
    }
}