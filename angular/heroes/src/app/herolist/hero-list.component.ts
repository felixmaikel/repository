import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../model/hero.model';
import { Router } from '@angular/router';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {

    heroes : Hero[] = [];
    count : number = 21;
    heroSelected : Hero;

    constructor(private heroService : HeroService, private router : Router) {

    }

    ngOnInit(){
        this.refresh();
    }

    newHero(name : string){
        this.heroService.newHero(name).subscribe(
            response => this.refresh(),
            error => console.log(error)
        );
    }

    remove(hero : Hero){
        this.heroService.removeHero(hero.id).subscribe(
            response => {
                    this.heroSelected = undefined;
                    this.refresh()
            },
            error => console.log(error)
        );
    }

    selectHero(hero : Hero){
        this.heroSelected = hero;
    }

    gotoViewDetails(id : number){
        this.router.navigate(['/heroes',id]);
    }

    private refresh(){
        this.heroService.findAll().subscribe(
            response => this.heroes = response,
            error => console.log(error)
        );
    }
}