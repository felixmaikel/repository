import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})

export class BookDetailComponent {
    book : Book;
    private bookService : BookService;
    private activatedRoute : ActivatedRoute;
    private router : Router;


    constructor(bookService : BookService, activatedRoute : ActivatedRoute, router : Router) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.refresh();
    }

    private refresh(){
        let identifier = this.activatedRoute.snapshot.params['id'];
        this.bookService.find(identifier).subscribe(
            book => this.book = book,
            error => console.log(error)
        );
    }

    gotoBooks(){
        this.router.navigate(['/books']);
    }

    gotoEdit(){
        this.router.navigate(['/books/edit', this.book.id]);
    }

    removeBook(){
        this.bookService.remove(this.book.id).subscribe(
            response => this.book = {title: ' ', description: ''}
        );
        this.router.navigate(['/books']);
    }
}