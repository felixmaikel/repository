import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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
    btnText : string;
    @Output()
    accept = new EventEmitter<any>();
    modalRef : NgbModalRef;

    constructor(private modalService : NgbModal){

    }

    open(content : any){
        this.modalRef = this.modalService.open(content);
    }

    confirm(){
        this.modalRef.close();
        this.accept.emit();
    }
}