import { Component } from '@angular/core'
import { BookService } from './book.service';
import { Book } from './book.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})

export class BookFormComponent {
    book : Book;
    private activatedRouter : ActivatedRoute;
    private bookService : BookService;
    private router : Router;

    constructor(activatedRoute : ActivatedRoute, bookService : BookService, router : Router){
        this.activatedRouter = activatedRoute;
        this.router = router;
        this.bookService = bookService;
        let id = this.activatedRouter.snapshot.params['id'];
        if(id){
            this.loadBook(id);
        }else{
            this.book = {title: '', description: ''};
        }
    }

    newBook(){
        if(this.book.id){
            this.bookService.update(this.book).subscribe(
                response => this.book = {title: '', description: ''}
            );
        }else{
            this.bookService.save(this.book).subscribe(
                response => this.book = {title: '', description: ''}
            );
        }
        this.router.navigate(['/books']);
    }

    loadBook(id : number){
        this.bookService.find(id).subscribe(
            response => this.book = response
        );
    }

    gotoBooks(){
        this.router.navigate(['/books']);
    }
}