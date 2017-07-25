import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    constructor(private translateService : TranslateService) {

    }

    transform(value : string, args : any[]): any{
        if(!value) {
            return null;
        }

        return this.translateService.translate(value);
    }
}