import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TranslateService } from '../../translate/translate.service';
import { Country } from '../../models/country';
import { VALIDATED_LOGIN, PERSON_ID_KEY } from '../../config/storekey';
import { Module } from '../../models/module';
import { SubModule } from '../../models/subModule';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { LoginObservable } from '../../observables/loginObservable';
import { Subscription }   from 'rxjs/Subscription';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';
import { UserInformationModal } from '../modals/user-data/user-data.component';

@Component({
    selector: 'menu-bar',
    templateUrl: './menuBar.component.html'
})

export class MenuBarComponent implements OnInit {

    private countries : Country[] = [];
    private imageBase : string = 'assets/flags/';
    private currentCountry : Country;
    private subscribe : Subscription;
    private menus : Module[] = [];
    private validatedUser : boolean;
    private person : Person;

    constructor(private translateService : TranslateService, private menuService : MenuService, private router : Router,
                private loginObservable : LoginObservable, private personService : PersonService,
                private componentFactoryResolver : ComponentFactoryResolver, private viewContainerRef : ViewContainerRef){
        this.currentCountry = {countryName:'España',countryId:0, flag:'b_spain.png', translatorName:'lang-es'};
    }

    ngOnInit(){
        this.loadCountries();
        this.subscribe = this.loginObservable.loginSubscriptors.subscribe(
            status => this.refresh(status)
        )
        if(!window.sessionStorage.getItem(VALIDATED_LOGIN)) {
            this.logout();
        }
        this.openUserInformationDialog();
    }

    loadCountries(){
         this.translateService.getCountries().subscribe(
            response => this.countries = response,
            error => {
             this.countries.push(this.currentCountry);
         });
    }

    changeLanguage(country : Country){
        this.translateService.setLanguage(country.translatorName);
        this.currentCountry = country;
    }

    private loadMenu(){
        let personId = window.sessionStorage.getItem(PERSON_ID_KEY);
        this.menuService.findMenuByPersonId(Number.parseInt(personId)).subscribe(
            response => this.menus = response,
            error => {
                this.gotoFailsPage();
            }
        );
    }

    private loadPersonInformation(){
        let personId = window.sessionStorage.getItem(PERSON_ID_KEY);
        this.personService.findPersonById(Number.parseInt(personId)).subscribe(
            response => this.person = response,
            error => {
                this.gotoFailsPage();
            }
        );
    }

    private gotoFailsPage() {
        window.sessionStorage.removeItem(VALIDATED_LOGIN);
        window.sessionStorage.removeItem(PERSON_ID_KEY);
        this.refresh(false);
        this.router.navigate(['/fails','/login']);
    }

    refresh(validatedUser : boolean){
        this.validatedUser = validatedUser;
        if(validatedUser == true) {
            this.loadMenu();
            this.loadPersonInformation();
        }
    }

    logout(){
        window.sessionStorage.removeItem(VALIDATED_LOGIN);
        window.sessionStorage.removeItem(PERSON_ID_KEY);
        this.person = null;
        this.menus = [];
        this.refresh(false);
        this.router.navigate(['/login']).catch(
            error => this.gotoFailsPage()
        );
    }

    openUserInformationDialog(){
        const factory = this.componentFactoryResolver.resolveComponentFactory(UserInformationModal);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}