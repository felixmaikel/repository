import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListModel } from '../models/list.model';
import { ListModalComponent } from '../dialogs/productmodal/product-modal.component';
import { ProductListService } from '../services/product-list.service';

@Component({
    selector: 'product-details',
    templateUrl: './details-product.component.html'
})

export class DetailProductComponent {
    @Input()
    listModel : ListModel;
    @Output()
    refresh = new EventEmitter<any>();

    constructor(private productListService : ProductListService){

    }

    update(item : ListModel) {
        this.productListService.update(item).subscribe(
            itemResult => {
                this.listModel = itemResult;
            }
        );
    }

    remove(){
        this.productListService.remove(this.listModel.id).subscribe(
            response => this.listModel = response
        );
        this.refresh.emit();
    }
}