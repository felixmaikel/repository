import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'hero-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
    hero : Hero;

    constructor(private heroService : HeroService, private router :  Router, private activatedRouter : ActivatedRoute){

    }

    ngOnInit(){
        let id = this.activatedRouter.snapshot.params['id'];
        this.heroService.find(id).subscribe(
            response => this.hero = response,
            error => console.log(error)
        );
    }

    gotoDashboard(){
        this.router.navigate(['dashboard'])
    }

    updateHero(){
        this.heroService.updateHero(this.hero).subscribe(
            response => this.hero = response,
            error => console.log(error)
        );
    }
}