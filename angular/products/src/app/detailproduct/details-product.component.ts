import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListModel } from '../models/list.model';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ListModalComponent } from '../dialogs/productmodal/product-modal.component';

@Component({
    selector: 'product-details',
    templateUrl: './details-product.component.html'
})

export class DetailProductComponent {
    @Input()
    listModel : ListModel;

    modal : ListModalComponent;

    constructor(modalService : NgbModal){
        this.modal = new ListModalComponent(modalService);
    }

    openModal(){
        console.log(this.modal);
        this.modal.open('Editar',this.listModel);
    }
}