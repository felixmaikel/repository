import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListModel } from '../../models/list.model';

@Component({
    selector: 'new-list-model',
    templateUrl: './product-modal.component.html'
})

export class ListModalComponent {
    @Input()
    title : string;

    listModel : ListModel;

    @ViewChild('detailModal')
    modal;

    @Output()
    accept = new EventEmitter<ListModel>();

    constructor(private modalService : NgbModal){

    }

    open(title : string, listModel : ListModel){
        this.modal.title = title;
        this.modal.listModel = listModel;
        this.modalService.open(this.modal);
    }

    confirm(){
        console.log(this);
    }
}