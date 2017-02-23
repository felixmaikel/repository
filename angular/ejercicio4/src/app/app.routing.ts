/*Se configuran la url que enlazan a los componentes de la aplicacion */
import { Routes, RouterModule} from '@angular/router';
import { BooksListComponent } from './books-list.component';
import { BookDetailComponent } from './book-details.component';
import { BookFormComponent } from './book-form.component';
// Mapeo de url con componentes
const appRoutes = [
    {path: 'books', component: BooksListComponent},
    {path: 'books/new', component: BookFormComponent },
    {path: 'books/edit/:id', component: BookFormComponent },
    {path: 'books/:id', component: BookDetailComponent},
    {path: '', redirectTo: 'books', pathMatch: 'full'}
]
// Se insertan las url para ser exportadas por el RouterModule
export const routing = RouterModule.forRoot(appRoutes);