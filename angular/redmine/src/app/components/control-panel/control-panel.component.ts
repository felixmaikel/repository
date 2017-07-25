import { Component } from '@angular/core';
import { TranslateService } from '../../translate/translate.service';

@Component({
    selector: 'control-panel',
    templateUrl: './control-panel.component.html'
})

export class ControlPanelComponent {

    constructor(private translateService : TranslateService) {
        
    }
}