import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'confirm-modal',
    templateUrl: './confirm-modal.component.html'
})

export class ConfirmModalComponent {
    @Input()
    title : string;
    @Input()
    message : string;
    @Input()
    alias : string
    @Output()
    accept = new EventEmitter<any>();

    constructor(){

    }

    confirm(){
        this.accept.emit();
    }
}