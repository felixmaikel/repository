import { Component, Input } from '@angular/core';
import { ListModel } from '../models/list.model';

@Component({
    selector: 'product-details',
    templateUrl: './details-product.component.html'
})

export class DetailProductComponent {
    @Input()
    listModel : ListModel;
    
}