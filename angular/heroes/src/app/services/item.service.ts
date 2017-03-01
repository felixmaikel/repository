import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { RouterService } from './router.service';

const PATH = 'app/config/menu.json';

@Injectable()
export class ItemService {

    constructor(private http : Http, private routerService : RouterService){

    }

    loadMenu(){
        return this.http.get(PATH).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    private showError(error){
       return Observable.throw("Error interno.");
    }
}