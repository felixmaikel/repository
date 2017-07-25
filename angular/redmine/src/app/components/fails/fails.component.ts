import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../translate/translate.service';
import { Router, ActivatedRoute } from '@angular/router';

const DEFAULT_PAGE = '/login';

@Component({
    selector:'fails-component',
    templateUrl:'./fails.component.html'
})

export class FailsComponent implements OnInit {

    backPage : string;

    constructor(private translateService : TranslateService, private activatedRoute : ActivatedRoute, 
                private router : Router) {

    }

    ngOnInit(){
        let page = this.activatedRoute.snapshot.params['page'];
        if(page) {
            this.backPage = page;
        }else{
            this.backPage = DEFAULT_PAGE;
        }
    }

    gotoBack() {
        this.router.navigate([this.backPage]);
    }
}