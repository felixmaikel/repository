import { Component, Input } from '@angular/core';
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

    constructor(private productListService : ProductListService){

    }

    update(item : ListModel) {
        console.log('Emitiendo modify'+item.name);
        this.productListService.update(item).subscribe(
            itemResult => {
                this.listModel = itemResult;
            }
        );
    }
}