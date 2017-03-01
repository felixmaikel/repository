import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from "../services/hero.service";

@Component({
    selector: 'dashboard-hero',
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes : Hero[];

    constructor(private heroService : HeroService){

    }

    ngOnInit(){
        this.heroService.findAll().subscribe(
            response => this.heroes = response,
            error => console.log(error)
        );
    }
}