import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './app.component';
import { Http } from '@angular/http';

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
    @Output()
    update = new EventEmitter<Item>();

    removeItem(){
        this.remove.emit(this.item);
    }

    updateItem(){
        this.item.status = !this.item.status;
        this.update.emit(this.item);
    }

}