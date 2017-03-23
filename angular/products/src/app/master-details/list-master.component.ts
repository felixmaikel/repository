import { Component, OnInit, ViewChild } from '@angular/core';
import { ListModel } from '../models/list.model';
import { ProductListService } from '../services/product-list.service';
import { AppComponent } from '../app.component';
import { MessageBoxComponent } from '../dialogs/messagebox/message-box.component';

@Component({
    selector: 'list-master',
    templateUrl: './list-master.component.html',
    styleUrls: ['./list-master.component.css']
})

export class ListMasterComponent implements OnInit {

    lists : ListModel[]=[];

    constructor(private productListService : ProductListService){
        console.log(productListService);
    }

    ngOnInit(){
        this.productListService.findAll().subscribe(
            response => this.lists = response
        );
    }

    newList(){
       
    }
}