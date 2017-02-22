import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';
import { BooksListComponent } from './books-list.component';
import { BookDetailComponent } from './book-details.component';
import { BookService } from './book.service';
import { BookFormComponent } from './book-form.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
