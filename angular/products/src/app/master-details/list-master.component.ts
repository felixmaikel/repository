import { Component, OnInit, ViewChild } from '@angular/core';
import { ListModel } from '../models/list.model';
import { ProductListService } from '../services/product-list.service';
import { AppComponent } from '../app.component';
import { MessageBoxComponent } from '../dialogs/messagebox/message-box.component';
import { ConfirmModalComponent } from '../dialogs/confirmmodal/confirm-modal.component'; 
import { ListModalComponent } from '../dialogs/productmodal/product-modal.component';

@Component({
    selector: 'list-master',
    templateUrl: './list-master.component.html'
   // styleUrls: ['./list-master.component.css']
})

export class ListMasterComponent implements OnInit {

    lists : ListModel[]=[];
    sussess : boolean;

    constructor(private productListService : ProductListService){
        
    }

    ngOnInit(){
        this.sussess = false;
        this.productListService.findAll().subscribe(
            response => this.lists = response
        );
    }

    newList(){
       console.log("Creado...");
    }

    refresh(){
        this.sussess = true;
        this.productListService.findAll().subscribe(
            response => this.lists = response
        );
    }

}