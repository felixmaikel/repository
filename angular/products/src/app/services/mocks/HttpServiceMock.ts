import { MockBackend } from '@angular/http/testing';
import { RequestOptionsArgs, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ListModel } from '../../models/list.model';

export class  HttpServiceMock extends MockBackend{

    countId : number = 6;
    listModels : ListModel[]=[
        {id:1, name: 'Producto 1', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 1},
        {id:2, name: 'Producto 2', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 2},
        {id:3, name: 'Producto 3', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 3},
        {id:4, name: 'Producto 4', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 4},
        {id:5, name: 'Producto 5', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 5},
        {id:6, name: 'Producto 6', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 6},
        {id:7, name: 'Producto 7', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 7},
        {id:8, name: 'Producto 8', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 8},
        {id:9, name: 'Producto 9', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 9},
        {id:10, name: 'Producto 10', image: 'assets/mahou.jpg', count: 12, createDate: new Date(), comment: 10}
    ];

    constructor(){
        super();
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return Observable.of(new Response(new ResponseOptions({
            body: JSON.stringify(this.listModels)
        })));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        this.listModels.push({id:this.countId, name: body.name, image: body.image, count:body.count, createDate: new Date()});
        return Observable.of(new Response(new ResponseOptions({
            body: JSON.stringify(this.listModels)
        })));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        let index = 0;
        for(var i=0; i<this.listModels.length; i++){
            if(this.listModels[i].id == body.id){
                this.listModels[i].name = body.name;
                this.listModels[i].count = body.count;
                index = i;
            }
        }
        return Observable.of(new Response(new ResponseOptions({
            body: JSON.stringify(this.listModels[index])
        })));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response>{
        let str = url.split("/");
        let id =  str[str.length - 1];
        let item = this.findProductById(Number.parseInt(id));
        this.listModels.splice(this.listModels.indexOf(item),1);
        return Observable.of(new Response(new ResponseOptions({
            body: JSON.stringify(item)
        })));
    }

    findProductById(id : number){
        let index = 0;
        for(var i=0; i<this.listModels.length; i++){
            if(this.listModels[i].id == id){
                index = i;
            }
        }
        return this.listModels[index];
    }
}