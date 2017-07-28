import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from '../languages/languages';
import { LANG_ES_NAME } from '../languages/lang-es';

const DEFAULT_LANGUAGE = LANG_ES_NAME;

@Injectable()
export class TranslateService {

    private currentLanguage : string;

    constructor(@Inject(TRANSLATIONS) private translator : any){
        this.currentLanguage = DEFAULT_LANGUAGE;
    }

    use(language : string) {
        this.currentLanguage = language;
    }

    translate(key : string) {
        if(!this.currentLanguage) {
            this.currentLanguage = DEFAULT_LANGUAGE;
        }

        if(!this.translator || !this.translator[this.currentLanguage][key]) {
            return key;
        }

        return this.translator[this.currentLanguage][key];
    }   
}