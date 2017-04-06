import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL_BASE } from './config';
import 'rxjs/Rx';
import { ListModel } from '../models/list.model';

@Injectable()
export class ProductListService{

    constructor(private http : Http){

    }

    findAll(){
        return this.http.get(URL_BASE).map(
            response => response.json()
        ).catch(
            error => this.showError(error)
        );
    }

    insert(listModel : ListModel){
        return this.http.post(URL_BASE, listModel).map(
            response => response.json()
        ).catch(
            error => this.showError(error)
        );
    }

    update(item : ListModel){
        return this.http.put(URL_BASE, item).map(
            response => response.json()
        ).catch(
            error => this.showError(error)
        );
    }

    remove(id : number) {
        return this.http.delete(URL_BASE+"/"+id).map(
            response => response.json()
        ).catch(
            error => this.showError(error)
        );
    }

    showError(error){
        return Observable.throw(error);
    }

}