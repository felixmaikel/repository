import { Component, OnInit } from '@angular/core';
import { Book } from './book.component';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
    selector : 'books-list',
    templateUrl : './books-list.component.html',
    styleUrls : ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {
 
    books : Book[] = [];
    private bookService : BookService;
    private router : Router;

    constructor(bookService : BookService, router : Router) {
        this.bookService = bookService;
        this.router = router;
    }

    ngOnInit(){
        this.findAll();
    }

    findAll(){
        this.bookService.findAll().subscribe(
           response => this.books = response 
        );
    }

    gotoNewForm(){
        this.router.navigate(['/books/new']);
    }
}