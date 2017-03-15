import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent {
    message: string = 'Hola mundo!!!';
    close = new EventEmitter();

    closeBox(){
        this.close.emit();
    }
}