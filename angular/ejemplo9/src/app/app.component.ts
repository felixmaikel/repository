import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   books : string [] = [];
   private booksService : BooksService;

   constructor(booksService : BooksService){
     this.booksService = booksService;
   }

   getBooks(title : string){
     this.books = [];
     this.booksService.getBooks(title).subscribe(
       response => this.books = response,
       error => console.log(error)
     );
   }
}
