import { Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translations';
import { LANG_NAME_ES } from './lang-es';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const DEFAULT_LANGUAGE = LANG_NAME_ES;
const URL_BASE = 'http://localhost:8080/country'

@Injectable()
export class TranslateService {

    private currentLanguage : string

    constructor(@Inject(TRANSLATIONS) private translations : any, private http : Http){
        this.currentLanguage = DEFAULT_LANGUAGE;
    }

    use(language : string){
        this.currentLanguage = language;
    }

    translate(key : string){
        if(!this.currentLanguage){
            this.currentLanguage = DEFAULT_LANGUAGE;
        }

        if(!this.translations[this.currentLanguage] || !this.translations[this.currentLanguage][key]){
            return key;
        }

        return this.translations[this.currentLanguage][key];
    }

    getCountries() {
        return this.http.get(URL_BASE).map(
            response => response.json()
        ).catch(
            error => this.throwError(error)
        );
    }

    setLanguage(translatorName : string){
        this.currentLanguage = translatorName;
    }

    private throwError(error : any){
        return Observable.throw(error);
    }
}