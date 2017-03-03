import { Component, OnInit } from '@angular/core';
import { ListModel } from '../models/list.model';

@Component({
    selector: 'list-master',
    templateUrl: './list-master.component.html',
    styleUrls: ['./list-master.component.css']
})

export class ListMasterComponent implements OnInit {

    lists : ListModel[]=[];

    constructor(){

    }

    ngOnInit(){
        this.lists = [
            {id: 1, name: 'lista 1', count: 12, createDate: '01/03/2017'},
            {id: 2, name: 'lista 2', count: 12, createDate: '01/03/2017'},
            {id: 3, name: 'lista 3', count: 12, createDate: '01/03/2017'},
            {id: 4, name: 'lista 4', count: 12, createDate: '01/03/2017'},
            {id: 5, name: 'lista 5', count: 12, createDate: '01/03/2017'}
        ];
    }
}