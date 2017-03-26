import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListModel } from '../../models/list.model';

@Component({
    selector: 'new-list-model',
    templateUrl: './product-modal.component.html'
})

export class ListModalComponent {
    listModel : ListModel;
    @Output()
    accept = new EventEmitter<ListModel>();
    modalRef : NgbModalRef;

    constructor(private modalService : NgbModal){

    }

    open(content : any){
        this.modalRef = this.modalService.open(content);
    }

    confirm(){
        this.modalRef.close();
        this.accept.emit(this.listModel);
    }
}