import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from '../model/hero.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const URL_BASE = "http://localhost:8080/heroes";

@Injectable()
export class HeroService {

    constructor(private http : Http){

    }

    findAll(){
        return this.http.get(URL_BASE).map(
             response => response.json(),
             error => this.showError(error)
         );
    }

    find(id : number){
        let url = URL_BASE+"/"+id;
        return this.http.get(url).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    newHero(name : string){
        return this.http.post(URL_BASE, {name}).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    removeHero(id : number){
        let url = URL_BASE+"/"+id;
        return this.http.delete(url).map(
            response => response,
            error => this.showError(error)
        );
    }

    updateHero(hero : Hero){
        return this.http.put(URL_BASE, {id: hero.id, name: hero.name}).map(
            response => response.json(),
            error => this.showError(error)
        );
    }

    private showError(error){
        return Observable.throw("Error interno");
    }
}