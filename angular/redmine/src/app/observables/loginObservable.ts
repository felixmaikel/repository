import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginObservable {

    private authenticationSuccessfull = new Subject<boolean>();
    loginSubscriptors = this.authenticationSuccessfull.asObservable();

    notificationAuthentication(status : boolean) {
        this.authenticationSuccessfull.next(status);
    }
}