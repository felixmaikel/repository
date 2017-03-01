import { Component, OnInit } from '@angular/core';
import { Item } from './model/item.model';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    items : Item[] = [];

    constructor(private itemService : ItemService){

    }

    ngOnInit(){
       this.itemService.loadMenu().subscribe(
         response => this.items = response,
         error => console.log(error)
       );
    }
}
