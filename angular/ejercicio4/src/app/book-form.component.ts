import { Component } from '@angular/core'
import { BookService } from './book.service';
import { Book } from './book.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})

export class BookFormComponent {
    book : Book;
    private activatedRouter : ActivatedRoute;
    private bookService : BookService;

    constructor(activatedRoute : ActivatedRoute, bookService : BookService){
        this.activatedRouter = activatedRoute;
        let id = this.activatedRouter.snapshot.params['id'];
        if(id){

        }else{
            this.book = {title: '', description: ''};
        }
    }

    newBook(){
        this.bookService.save(this.book)
    }
}