import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .red { color : red;}
      .blue {color : blue;}
      .yellow { color : yellow;}
      .blod { color : blod}
      `
  ]
})

export class AppComponent {
  name = "Anybody";
  className = "red";
  redActive = true;
  num = 2;
  visible = false;

  elems = [
    { desc : "Elemet1", check:true},
    { desc : "Elemet2", check:true},
    { desc : "Elemet3", check:false}
  ];

  pClasses = {
    red : true,
    bold : false
  };

  setClassName(className : string){
    this.className = className;
    this.redActive = (className === 'red');
  }

  changeParagraph(){
    this.pClasses.bold = true;
  }

  showText(){
    this.visible = true;
    this.num = 3;
  }

}
