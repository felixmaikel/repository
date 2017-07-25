import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../translate/translate.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { PERSON_ID_KEY,VALIDATED_LOGIN } from '../../config/storekey';
import { LoginObservable } from '../../observables/loginObservable';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    errorMessage : string;

    constructor(private translateService : TranslateService, private authenticationService : AuthenticationService,
                private router : Router, private loginObservable : LoginObservable){
        
    }

    authentication(username : string, password : string) {
        this.authenticationService.authentication(username, password).subscribe(
            response => {
                window.sessionStorage.setItem(PERSON_ID_KEY,response.personId);
                window.sessionStorage.setItem(VALIDATED_LOGIN, 'true');
                this.errorMessage = null;
                this.loginObservable.notificationAuthentication(true);
                this.gotoMainPage();  
            },
            error => {
                console.log(error);
                if(error.status == 0){
                    this.router.navigate(['/fails','/login']);
                }else{
                    this.errorMessage = error.message;
                }
            }
        );
    }

    gotoMainPage(){
        this.router.navigate(['/controlPanel']).catch(
            error => {
                this.router.navigate(['/fails','/login']);
            }
        );
    }

}