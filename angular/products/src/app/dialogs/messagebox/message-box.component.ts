import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent {

    message: string = 'Hola mundo!!!';

    constructor(private modalService : NgbModal){

    }

    open(content : any){
        this.modalService.open(content).result.then(
            result => {
                console.log('${result}');
            }
        );
    }

    closeBox(){
        
    }
}