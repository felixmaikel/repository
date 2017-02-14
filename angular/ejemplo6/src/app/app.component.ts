import { Component } from '@angular/core';

interface Item{
  description : string;
  status : boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  elements : Item [] = [];

  addItem(description : string){
      this.elements.push({description,status:false});
  }

  removeItem(item : Item){
    let index = this.elements.indexOf(item);
    this.elements.splice(index,1);
  }
}
