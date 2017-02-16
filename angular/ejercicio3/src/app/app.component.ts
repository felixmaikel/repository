import { Component } from '@angular/core';
import { Http } from '@angular/http';

export interface Item {
  description : string;
  status : boolean;
  id : number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   elements : Item [] = [];

   private http : Http;

   constructor(http : Http){
     this.http = http;
   }

   addItem(description : string){
      let url = "http://localhost:8080/items/";
      this.http.post(url, {description, checked:false}).subscribe(
        response => {
          this.findAll();          
        }
      );
   }

   removeItem(item : Item){
     let url = "http://localhost:8080/items/"+item.id;
     this.http.delete(url).subscribe(
       response => {
          this.findAll();
       }
     );
   }

   
    updateStatus(item : Item){
        let url = "http://localhost:8080/items/"+item.id;
        this.http.put(url, {id : item.id, description : item.description, checked : item.status}).subscribe(
            response => {
                let data = response.json();
            }
        );
    }

   findAll(){
      this.elements = [];
      let url = "http://localhost:8080/items/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          for( var i = 0; i<data.length; i++){
            this.elements.push({description : data[i].description, status : data[i].checked, id : data[i].id});
          }
        }
      );
   }
}
