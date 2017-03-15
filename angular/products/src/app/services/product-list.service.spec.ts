import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, ResponseOptions, Response, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ListModel } from '../models/list.model';
import { URL_BASE, BACKEND_DATA } from './config';
import { ProductListService } from './product-list.service';
import 'rxjs/Rx';

describe('Configurando los módulos', () =>{

    it('Cuando se invoke findAll devuleve las listas de productos ',
        inject([ProductListService, MockBackend], (productListService, mockBackend) =>{
            mockBackend.connections.subscribe(
                connection => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(BACKEND_DATA)
                    })));
                }
            )

            productListService.findAll().subcribe(
                products => {
                    expect(products.length).toBe(5);
                    expect(products[0].name).toEqual(BACKEND_DATA[0].name);
                    expect(products[1].name).toEqual(BACKEND_DATA[1].name);
                    expect(products[2].name).toEqual(BACKEND_DATA[2].name);
                    expect(products[3].name).toEqual(BACKEND_DATA[3].name);
                    expect(products[4].name).toEqual(BACKEND_DATA[4].name);
                }
            )
       }
    ));
    }
 );

