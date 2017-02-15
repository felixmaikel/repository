import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './app.component';

@Component({
    selector : 'element',
    templateUrl : './item.component.html',
    styleUrls:[ './item.component.css' ]
})

export class ItemComponent {
    @Input()
    private item : Item;

    @Output()
    remove = new EventEmitter<Item>();

    click(){
        this.remove.emit(this.item);
    }
}