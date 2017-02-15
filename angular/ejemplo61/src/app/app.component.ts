import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Main title';

  hiddenTitle(hidden : boolean){
    console.log("Hidden: "+hidden);
  }
}
