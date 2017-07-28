import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
    name: 'lang',
    pure: false
})

export class TranslatePipe implements PipeTransform{

    constructor(private translateService : TranslateService) {

    }

    transform(value: any, ...args: any[]): any {
        if(!value) {
            return null;
        }
        return this.translateService.translate(value);
    }

}