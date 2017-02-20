import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Memory books';
  books : string [] = [];

  private bookService : BookService;

  constructor(bookService : BookService){
    this.bookService = bookService;
  }

  ngOnInit(){
    this.getBooks(" ");
  }

  getBooks(title : string){
     this.books = [];
     this.books = this.bookService.getBooks(title);
  }

}
