import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent {
    @Input()
    private title : string;

    @Output()
    hidden = new EventEmitter<boolean>();

    visible = true;

    click(){
        this.visible = !this.visible;
        this.hidden.emit(this.visible);
    }
}