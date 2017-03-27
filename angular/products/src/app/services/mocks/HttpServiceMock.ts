import { MockBackend } from '@angular/http/testing';
import { RequestOptionsArgs, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ListModel } from '../../models/list.model';

export class  HttpServiceMock extends MockBackend{

    countId : number = 6;
    listModels : ListModel[]=[
        {id:1, name: 'Lista 1', image: 'assets/mahou.jpg', count: 12, createDate: new Date()},
        {id:2, name: 'Lista 2', image: 'assets/mahou.jpg', count: 12, createDate: new Date()},
        {id:3, name: 'Lista 3', image: 'assets/mahou.jpg', count: 12, createDate: new Date()},
        {id:4, name: 'Lista 4', image: 'assets/mahou.jpg', count: 12, createDate: new Date()},
        {id:5, name: 'Lista 5', image: 'assets/mahou.jpg', count: 12, createDate: new Date()}
    ];

    constructor(){
        super();
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response>{
        console.log(url);
        console.log(options)
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
}