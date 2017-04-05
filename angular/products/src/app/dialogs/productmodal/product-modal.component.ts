import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ListModel } from '../../models/list.model';

@Component({
    selector: 'new-list-model',
    templateUrl: './product-modal.component.html'
})

export class ListModalComponent {
    @Input()
    title : string;
    @Input('item')
    listModel : ListModel;

    @Output()
    accept = new EventEmitter<ListModel>();
    @Output()
    modify = new EventEmitter<ListModel>();

    confirm(name : string, count : number){
        if(this.listModel.id){
            this.listModel.name = name;
            this.listModel.count = count;
            this.modify.emit(this.listModel);
        }else{
            console.log('Emitiendo accept');
            this.accept.emit(this.listModel);
        }
    }
}