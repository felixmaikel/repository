import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListModel } from '../../models/list.model';

@Component({
    selector: 'new-list-model',
    templateUrl: './product-modal.component.html'
})

export class ListModalComponent {
    @Input()
    title : string;
    @Input()
    btnText : string;
    
    listModel : ListModel;
    @Output()
    accept = new EventEmitter<ListModel>();
    modalRef : NgbModalRef;

    constructor(private modalService : NgbModal){

    }

    confirm(){
        this.accept.emit(this.listModel);
    }
}