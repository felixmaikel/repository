import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListModel } from '../../models/list.model';

@Component({
    selector: 'new-list-model',
    templateUrl: './product-modal.component.html'
})

export class ListModalComponent implements OnInit {
    title : string;
    @Input()
    listModel : ListModel;
    @Output()
    accept = new EventEmitter<ListModel>();

    ngOnInit(){
        this.title = "Editar"
        if(!this.listModel){
            this.title = "Nuevo"
            this.listModel = {name:'', image:'',count:0};
        }
    }
    
    confirm(){
        this.accept.emit(this.listModel);
    }
}